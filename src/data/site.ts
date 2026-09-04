// Single source of truth for NAP (name / address / phone) and every outbound link.
// Footer, contact page, schema.org and the header CTA all read from here — never duplicate a
// phone number or an address in a component.
//
// TODO(brief): every value marked `fictional` below is placeholder data. The phone numbers are
// deliberately invalid (000 00 00) so the site never dials a real stranger.

export const site = {
  name: 'Etik Mali Müşavirlik',
  shortName: 'Etik',
  legalName: 'Etik Serbest Muhasebeci Mali Müşavirlik', // fictional
  tagline: 'Serbest Muhasebeci Mali Müşavirlik Bürosu',
  domain: 'https://etikmusavirlik.com.tr', // fictional
  foundedYear: 2011, // fictional
  chamber: 'İstanbul SMMM Odası', // fictional

  phone: '+902120000000', // fictional — intentionally unroutable
  phoneDisplay: '0212 000 00 00',
  whatsapp: '905320000000', // fictional
  whatsappDisplay: '0532 000 00 00',
  email: 'bilgi@etikmusavirlik.com.tr', // fictional

  address: {
    street: 'Esentepe Mah. Büyükdere Cad. No: 122, Kat 7',
    locality: 'Şişli',
    region: 'İstanbul',
    postalCode: '34394',
    country: 'TR',
  },

  hours: [
    { days: 'Pazartesi – Cuma', time: '09:00 – 18:30' },
    { days: 'Cumartesi', time: 'Randevu ile' },
    { days: 'Pazar', time: 'Kapalı' },
  ],
  // schema.org openingHours format
  openingHours: ['Mo-Fr 09:00-18:30'],

  // TODO(brief): replace with the real Google Maps place link and coordinates.
  maps: {
    url: 'https://www.google.com/maps/search/?api=1&query=Esentepe+Mah.+B%C3%BCy%C3%BCkdere+Cad.+No%3A122+%C5%9Ei%C5%9Fli+%C4%B0stanbul',
    embed:
      'https://www.google.com/maps?q=Esentepe%20Mah.%20B%C3%BCy%C3%BCkdere%20Cad.%20No%3A122%20%C5%9Ei%C5%9Fli%20%C4%B0stanbul&output=embed',
    lat: 41.0742,
    lng: 29.0106,
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/etikmusavirlik' }, // fictional
    { label: 'Instagram', href: 'https://www.instagram.com/etikmusavirlik' }, // fictional
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
