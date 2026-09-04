// ---------------------------------------------------------------------------
// Net ↔ brüt maaş hesabı. Runs entirely in the visitor's browser — no request
// leaves the page, nothing is stored. See PROFESYONEL-HIZMETLER.md §5.
//
// Rates are never written here; they come from src/data/rates.ts.
// ---------------------------------------------------------------------------

import { activeRates, type YearRates } from '../data/rates';

export type MonthRow = {
  month: number;
  gross: number;
  sgkEmployee: number;
  unemploymentEmployee: number;
  taxBase: number;
  cumulativeBase: number;
  /** Bracket rate applied to the last lira of this month's base. */
  marginalRate: number;
  incomeTaxRaw: number;
  incomeTaxExemption: number;
  incomeTax: number;
  stampDutyRaw: number;
  stampDutyExemption: number;
  stampDuty: number;
  net: number;
  employerCost: number;
};

export type PayrollResult = {
  year: number;
  months: MonthRow[];
  totals: {
    gross: number;
    net: number;
    incomeTax: number;
    stampDuty: number;
    sgkEmployee: number;
    unemploymentEmployee: number;
    employerCost: number;
  };
};

/** Progressive tax on a cumulative base. */
function taxOnCumulative(base: number, r: YearRates): number {
  let remaining = base;
  let previousCap = 0;
  let tax = 0;
  for (const bracket of r.brackets) {
    if (remaining <= 0) break;
    const slice = Math.min(remaining, bracket.upTo - previousCap);
    tax += slice * bracket.rate;
    remaining -= slice;
    previousCap = bracket.upTo;
  }
  return tax;
}

function marginalRate(base: number, r: YearRates): number {
  for (const bracket of r.brackets) if (base <= bracket.upTo) return bracket.rate;
  return r.brackets[r.brackets.length - 1].rate;
}

/**
 * The minimum-wage exemption: each month, income tax and stamp duty calculated on the
 * minimum wage are deducted from the employee's own liability. The exemption tracks a
 * hypothetical minimum-wage earner's own cumulative base, which is why it shrinks as the
 * year progresses and that earner crosses into the second bracket.
 */
function minWageExemptions(r: YearRates) {
  const rows: { income: number; stamp: number }[] = [];
  const sgk = r.minWageGross * (r.sgkEmployee + r.unemploymentEmployee);
  const monthlyBase = r.minWageGross - sgk;
  let cumulative = 0;
  for (let m = 0; m < 12; m++) {
    const before = taxOnCumulative(cumulative, r);
    cumulative += monthlyBase;
    rows.push({
      income: taxOnCumulative(cumulative, r) - before,
      stamp: r.minWageGross * r.stampDutyRate,
    });
  }
  return rows;
}

export type Options = {
  /** Apply the 5-point 5510 employer discount to the employer cost figure. */
  employerDiscount?: boolean;
  /** Employee exempt from income tax and/or stamp duty (engelli indirimi vb. hariç). */
  applyMinWageExemption?: boolean;
  rates?: YearRates;
};

/** Full 12-month payroll for a constant monthly gross salary. */
export function fromGross(gross: number, opts: Options = {}): PayrollResult {
  const r = opts.rates ?? activeRates;
  const useExemption = opts.applyMinWageExemption ?? true;
  const ceiling = r.minWageGross * r.sgkCeilingMultiplier;
  const exemptions = minWageExemptions(r);

  const months: MonthRow[] = [];
  let cumulative = 0;

  for (let m = 0; m < 12; m++) {
    const sgkBase = Math.min(gross, ceiling);
    const sgkEmployee = sgkBase * r.sgkEmployee;
    const unemploymentEmployee = sgkBase * r.unemploymentEmployee;
    const taxBase = gross - sgkEmployee - unemploymentEmployee;

    const before = taxOnCumulative(cumulative, r);
    cumulative += taxBase;
    const incomeTaxRaw = taxOnCumulative(cumulative, r) - before;

    const incomeTaxExemption = useExemption
      ? Math.min(incomeTaxRaw, exemptions[m].income)
      : 0;
    const stampDutyRaw = gross * r.stampDutyRate;
    const stampDutyExemption = useExemption
      ? Math.min(stampDutyRaw, exemptions[m].stamp)
      : 0;

    const incomeTax = incomeTaxRaw - incomeTaxExemption;
    const stampDuty = stampDutyRaw - stampDutyExemption;
    const net = gross - sgkEmployee - unemploymentEmployee - incomeTax - stampDuty;

    const employerRate = opts.employerDiscount
      ? r.sgkEmployerDiscounted
      : r.sgkEmployer;
    const employerCost =
      gross + sgkBase * employerRate + sgkBase * r.unemploymentEmployer;

    months.push({
      month: m + 1,
      gross,
      sgkEmployee,
      unemploymentEmployee,
      taxBase,
      cumulativeBase: cumulative,
      marginalRate: marginalRate(cumulative, r),
      incomeTaxRaw,
      incomeTaxExemption,
      incomeTax,
      stampDutyRaw,
      stampDutyExemption,
      stampDuty,
      net,
      employerCost,
    });
  }

  const sum = (pick: (row: MonthRow) => number) =>
    months.reduce((acc, row) => acc + pick(row), 0);

  return {
    year: r.year,
    months,
    totals: {
      gross: sum((x) => x.gross),
      net: sum((x) => x.net),
      incomeTax: sum((x) => x.incomeTax),
      stampDuty: sum((x) => x.stampDuty),
      sgkEmployee: sum((x) => x.sgkEmployee),
      unemploymentEmployee: sum((x) => x.unemploymentEmployee),
      employerCost: sum((x) => x.employerCost),
    },
  };
}

/**
 * Gross for a target January net. The relationship is piecewise linear but the bracket
 * edges and the exemption cap make an analytic inverse fragile, so we bisect — 60
 * iterations is exact to well under a kuruş and costs nothing at this scale.
 */
export function fromNet(targetNet: number, opts: Options = {}): PayrollResult {
  let low = targetNet;
  let high = Math.max(targetNet * 3, targetNet + 100_000);
  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    if (fromGross(mid, opts).months[0].net < targetNet) low = mid;
    else high = mid;
  }
  return fromGross((low + high) / 2, opts);
}

const formatter = new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const tl = (value: number) => formatter.format(value);

export const monthNames = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];
