// ---------------------------------------------------------------------------
// Turkish payroll parameters — ALL RATES LIVE HERE, nowhere else.
//
// Year:    2025
// Sources: Asgari Ücret Tespit Komisyonu kararı (asgari ücret),
//          5510 sayılı Kanun (SGK prim oranları ve tavan),
//          193 sayılı GVK 103. madde (ücret gelir vergisi tarifesi),
//          488 sayılı Damga Vergisi Kanunu (binde 7,59).
//
// TODO(brief): when the 2026 figures are published, add a `2026` block below and change
// `activeYear`. Nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export type TaxBracket = { upTo: number; rate: number };

export type YearRates = {
  year: number;
  minWageGross: number;
  /** Employee-side deductions */
  sgkEmployee: number;
  unemploymentEmployee: number;
  /** Employer-side cost */
  sgkEmployer: number;
  sgkEmployerDiscounted: number; // 5510 5-point discount applied
  unemploymentEmployer: number;
  /** Prime base ceiling = 7.5 × minimum wage */
  sgkCeilingMultiplier: number;
  stampDutyRate: number;
  /** GVK 103 — wage income brackets, cumulative base */
  brackets: TaxBracket[];
};

export const rates2025: YearRates = {
  year: 2025,
  minWageGross: 26005.5,
  sgkEmployee: 0.14,
  unemploymentEmployee: 0.01,
  sgkEmployer: 0.2075,
  sgkEmployerDiscounted: 0.1575,
  unemploymentEmployer: 0.02,
  sgkCeilingMultiplier: 7.5,
  stampDutyRate: 0.00759,
  brackets: [
    { upTo: 158_000, rate: 0.15 },
    { upTo: 330_000, rate: 0.2 },
    { upTo: 1_200_000, rate: 0.27 },
    { upTo: 4_300_000, rate: 0.35 },
    { upTo: Infinity, rate: 0.4 },
  ],
};

export const activeRates = rates2025;
