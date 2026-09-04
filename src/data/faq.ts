// TODO(brief): answers reflect standard practice, not this specific office's policy. Confirm.

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  {
    q: 'Mevcut mali müşavirimden geçiş nasıl oluyor?',
    a: 'Devir, mevcut müşavirinizden defter ve belgelerin tesliminden ibarettir; süreç genelde bir hafta içinde tamamlanır. Geçmiş dönem kayıtlarını devralmadan önce kontrol eder, eksik veya düzeltme gerektiren bir durum varsa devirden önce size yazılı olarak bildiririz.',
  },
  {
    q: 'Ücret nasıl belirleniyor?',
    a: 'Ücret; mükellefiyet türü, aylık belge adedi, personel sayısı ve talep edilen raporlama düzeyine göre belirlenir. Asgari ücret tarifesi TÜRMOB tarafından yayımlanır, teklif bu tarifenin altında olamaz. Görüşme sonunda kapsamı ve tutarı yazılı olarak paylaşırız.',
  },
  {
    q: 'Belgeleri fiziksel olarak getirmem gerekiyor mu?',
    a: 'Hayır. e-Fatura ve e-Arşiv belgeleri sistem üzerinden görülür; kalan belgeler için e-posta veya WhatsApp yeterlidir. Yıl sonunda saklama yükümlülüğü olan asılları tek seferde teslim alırız.',
  },
  {
    q: 'Şirketimi henüz kurmadım, önce görüşebilir miyiz?',
    a: 'Kuruluş öncesi görüşme ücretsizdir ve tavsiye edilir. Şirket türü, sermaye, ortaklık yapısı ve vergi rejimi kuruluştan sonra değiştirilebilir; ancak sonradan değiştirmek her zaman daha pahalıdır.',
  },
  {
    q: 'Beyanname takvimini takip etmem gerekir mi?',
    a: 'Hayır, takvim bizde. Ödeme gerektiren bir yükümlülük doğduğunda tutarı ve son gününü siz sormadan bildiririz. Sizden beklenen tek şey, belgelerin ay kapanışından önce bize ulaşmış olmasıdır.',
  },
  {
    q: 'Vergi incelemesine girersem ne oluyor?',
    a: 'İnceleme ve izaha davet süreçlerinde mükellefi temsil eder, savunma ve izah metinlerini hazırlarız. Sürecin hangi aşamasında ne olacağını baştan anlatırız; sonucu ise hiçbir müşavir önceden taahhüt edemez.',
  },
];
