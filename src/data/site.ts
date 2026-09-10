// Single source of truth for NAP (name / address / phone) and every outbound link.
// Footer, contact page, schema.org and the header CTA all read from here — never duplicate a
// phone number or an address in a component.
//
// ⚠️ TASLAK BUILD. Ofisten gelen gerçek özgeçmiş belgesiyle birlikte isim, adres, e-posta,
// çalışma saatleri ve sabit hat/cep telefonu gerçek bilgilerle dolduruldu. Hâlâ eksik/teyit
// bekleyen alanlar aşağıda ve /taslak sayfasında işaretli: alan adı, sabit hat hane sayısı,
// posta kodu, WhatsApp hattı, harita pin'i, sosyal medya hesapları, oda sicil/ruhsat no,
// vergi no, MERSİS. `taslak: false` yapmadan önce hepsi netleşmeli.

/** Drives the draft bar, the /taslak page, and the noindex meta. */
export const taslak = true;

export const site = {
  name: 'Etik Mali Müşavirlik',
  shortName: 'Etik',
  legalName: 'Etik SM Mali Müşavirlik A.Ş.',
  tagline: 'Serbest Muhasebeci Mali Müşavirlik Bürosu',
  // Ofisin e-posta alan adından çıkarıldı (alidogan@etikmalimusavirlik.org) — teyit gerekir.
  domain: 'https://etikmalimusavirlik.org',
  // Ali Doğan kendi ofisini 2003'te kurdu; Etik SM Mali Müşavirlik A.Ş. 2019'da kuruldu.
  // Hangi yılın "kuruluş" olarak gösterileceği ofisle teyitlenmeli, şimdilik 2003 kullanıldı.
  foundedYear: 2003,
  chamber: 'İstanbul SMMM Odası',
  // No oda sicil / ruhsat number anywhere: Class C, never invented. Client supplies it.

  // Belgede "Tel: 0212 225 66 661" yazıyor — bu 12 hane (standart sabit hat 11 hane).
  // Muhtemelen yazım hatası; ofisten doğru numarayı teyit edip düzeltmek gerekir.
  phone: '+902122256661',
  phoneDisplay: '0212 225 66 661',
  phoneAlt: '+905077686810',
  phoneAltDisplay: '0507 768 68 10',
  // WhatsApp hattı belgede belirtilmedi — Gsm numarasıyla aynı varsayıldı, teyit gerekir.
  whatsapp: '905077686810',
  whatsappDisplay: '0507 768 68 10',
  email: 'alidogan@etikmalimusavirlik.org',

  address: {
    street: '19 Mayıs Mah. Büyükdere Cad. No:8 Güzel Abant Apt D:4',
    locality: 'Şişli',
    region: 'İstanbul',
    // Belgede posta kodu verilmedi — ofisten teyit gerekir.
    postalCode: '',
    country: 'TR',
  },

  hours: [
    { days: 'Pazartesi – Cuma', time: '09:30 – 18:30' },
    { days: 'Cumartesi', time: 'Kapalı' },
    { days: 'Pazar', time: 'Kapalı' },
  ],
  openingHours: ['Mo-Fr 09:30-18:30'],

  // Metin aramalı pin — gerçek adrese göre güncellendi ama hassas konum değil.
  // Ofisin Google İşletme Profili varsa oradan tam koordinat alınabilir.
  maps: {
    url: 'https://www.google.com/maps/search/?api=1&query=19+May%C4%B1s+Mah.+B%C3%BCy%C3%BCkdere+Cad.+No%3A8+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul',
    embed:
      'https://www.google.com/maps?q=19+May%C4%B1s+Mah.+B%C3%BCy%C3%BCkdere+Cad.+No%3A8+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul&z=16&output=embed',
    lat: 41.0602,
    lng: 28.9877,
  },

  // Platform home pages, never a real account. Ofisin gerçek hesapları teyit edilmeli.
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
export const addressLine = [
  `${site.address.street},`,
  site.address.postalCode,
  `${site.address.locality} / ${site.address.region}`,
]
  .filter(Boolean)
  .join(' ');
