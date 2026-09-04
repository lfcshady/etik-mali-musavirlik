// Single source of truth for NAP (name / address / phone) and every outbound link.
// Footer, contact page, schema.org and the header CTA all read from here — never duplicate a
// phone number or an address in a component.
//
// ⚠️ TASLAK BUILD. Every contact value below is a standard placeholder from
// `_shared/taslak-mode.md` §3 and reaches no real person or business. Switching to `gerçek`
// means replacing all of them and setting `taslak: false`. See site/DEMO.md.

/** Drives the draft bar, the /taslak page, and the noindex meta. */
export const taslak = true;

export const site = {
  name: 'Etik Mali Müşavirlik',
  shortName: 'Etik',
  legalName: 'Etik Serbest Muhasebeci Mali Müşavirlik',
  tagline: 'Serbest Muhasebeci Mali Müşavirlik Bürosu',
  domain: 'https://ornekfirma.com', // taslak placeholder domain
  foundedYear: 2011,
  chamber: 'İstanbul SMMM Odası',
  // No oda sicil / ruhsat number anywhere: Class C, never invented. Client supplies it.

  phone: '+905555555555',
  phoneDisplay: '0555 555 55 55',
  phoneAlt: '+902125555555',
  phoneAltDisplay: '0212 555 55 55',
  whatsapp: '905555555555',
  whatsappDisplay: '0555 555 55 55',
  email: 'ornek@ornekfirma.com',

  address: {
    street: 'Örnek Mah. Örnek Cad. No: 1',
    locality: 'Şişli',
    region: 'İstanbul',
    postalCode: '34381',
    country: 'TR',
  },

  hours: [
    { days: 'Pazartesi – Cuma', time: '09:00 – 18:30' },
    { days: 'Cumartesi', time: 'Randevu ile' },
    { days: 'Pazar', time: 'Kapalı' },
  ],
  openingHours: ['Mo-Fr 09:00-18:30'],

  // District-level centre pin — never a real business listing (taslak-mode §3).
  maps: {
    url: 'https://www.google.com/maps/search/?api=1&query=%C5%9Ei%C5%9Fli%2C+%C4%B0stanbul',
    embed: 'https://www.google.com/maps?q=%C5%9Ei%C5%9Fli%2C%20%C4%B0stanbul&z=13&output=embed',
    lat: 41.0602,
    lng: 28.9877,
  },

  // Platform home pages, never a real account.
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ],

  areaServed: ['İstanbul', 'Türkiye'],
} as const;

export const nav = [
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Ekip', href: '/ekip' },
  { label: 'Maaş Hesaplama', href: '/araclar/maas-hesaplama' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

export const waHref = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const telHref = `tel:${site.phone}`;
export const mailHref = `mailto:${site.email}`;
export const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.locality} / ${site.address.region}`;
