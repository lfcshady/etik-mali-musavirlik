// TODO(brief): scope lines are written from sector knowledge, not from the client. Confirm each
// one against what the practice actually delivers before publishing.

export type Service = {
  slug: string;
  no: string;
  title: string;
  summary: string;
  /** What the practice actually does, month to month. */
  scope: string[];
  /** Who this is for. */
  audience: string;
  cadence: string;
  /** One line the visitor can check themselves against. */
  signal: string;
};

export const services: Service[] = [
  {
    slug: 'muhasebe-ve-defter-tutma',
    no: '01',
    title: 'Muhasebe ve Defter Tutma',
    summary:
      'Aylık muhasebe döngüsünün tamamı: kayıt, mutabakat, beyanname ve e-defter. Takvimi biz takip ederiz.',
    scope: [
      'Fatura, banka ve kasa kayıtlarının aylık işlenmesi',
      'e-Defter ve e-Belge süreçlerinin yürütülmesi',
      'KDV, muhtasar ve geçici vergi beyannamelerinin hazırlanıp gönderilmesi',
      'Cari hesap ve banka mutabakatları',
      'Dönem sonu envanter, amortisman ve kapanış işlemleri',
    ],
    audience: 'Şahıs işletmesinden limited ve anonim şirkete kadar tüm mükellefler',
    cadence: 'Aylık',
    signal:
      'Beyanname son gününü sizden öğreniyorsak, muhasebe hizmeti almıyorsunuz demektir.',
  },
  {
    slug: 'bordro-ve-ozluk',
    no: '02',
    title: 'Bordro ve Özlük İşleri',
    summary:
      'Bordro hesabı, SGK bildirimleri ve özlük dosyası. Personel sayınız değiştiğinde süreç değişmez.',
    scope: [
      'Aylık bordro hesaplaması ve ücret bordrosu düzenlenmesi',
      'SGK işe giriş, işten çıkış ve aylık prim hizmet belgesi bildirimleri',
      'Kıdem, ihbar ve yıllık izin karşılıklarının takibi',
      'Özlük dosyalarının mevzuata uygun kurulması',
      'Teşvik ve prim indirimlerinin uygulanması',
    ],
    audience: 'Personel çalıştıran her ölçekten işveren',
    cadence: 'Aylık',
    signal:
      'İşten çıkış bildirimi geciktiğinde ceza işverene kesilir. Bu takvimi kaçırmamak bizim işimiz.',
  },
  {
    slug: 'vergi-danismanligi',
    no: '03',
    title: 'Vergi Danışmanlığı ve Planlama',
    summary:
      'Kararı vermeden önce vergi etkisini bilmek. Yıl sonunda değil, işlem öncesinde.',
    scope: [
      'Yatırım, ortaklık ve satış kararlarının vergi etkisinin önceden hesaplanması',
      'İstisna, indirim ve muafiyetlerin doğru uygulanması',
      'Vergi incelemesi ve izaha davet süreçlerinde temsil',
      'Uzlaşma ve düzeltme başvurularının yürütülmesi',
      'Yıllık gelir ve kurumlar vergisi beyannamelerinin hazırlanması',
    ],
    audience: 'Büyüyen şirketler, ortaklık yapısı değişen işletmeler, yüksek gelirli serbest meslek erbabı',
    cadence: 'Yıllık + işlem bazlı',
    signal:
      'Yasal sınırlar içinde planlama yapılır. Vergi yükünü azaltmanın yolu, kuralı esnetmek değil doğru zamanlamadır.',
  },
  {
    slug: 'sirket-kurulusu',
    no: '04',
    title: 'Şirket Kuruluşu ve Yapı Değişiklikleri',
    summary:
      'Doğru şirket türüyle başlamak, sonradan tür değiştirmekten ucuzdur. Kuruluş öncesinde konuşulur.',
    scope: [
      'Şahıs, limited ve anonim şirket kuruluşu',
      'Şirket türü değişikliği, birleşme ve bölünme işlemleri',
      'Ortaklık payı devri ve sermaye artırımı',
      'Şube ve irtibat bürosu açılışı',
      'Tasfiye ve kapanış süreçleri',
    ],
    audience: 'Yeni girişimciler, tür değiştiren işletmeler, ortaklık yapısı değişenler',
    cadence: 'Proje bazlı',
    signal:
      'Kuruluş formu doldurmak değil, karar vermektir: hangi tür, hangi sermaye, hangi vergi rejimi.',
  },
  {
    slug: 'e-ticaret-muhasebesi',
    no: '05',
    title: 'E-Ticaret ve Pazaryeri Muhasebesi',
    summary:
      'Pazaryeri komisyonu, iade, kargo ve yurt dışı satış — hepsi farklı kayıt gerektirir.',
    scope: [
      'Pazaryeri hakediş raporlarının mutabakatı ve kayda alınması',
      'Komisyon, hizmet bedeli ve iade işlemlerinin ayrıştırılması',
      'Yurt dışı satışta KDV ve hizmet ihracı istisnasının uygulanması',
      'Ödeme kuruluşu ve sanal POS hareketlerinin banka kayıtlarıyla eşleştirilmesi',
      'Stok ve maliyet takibinin satış kanallarıyla uyumlandırılması',
    ],
    audience: 'Pazaryeri satıcıları, kendi mağazasını işleten markalar, dijital hizmet ihracatçıları',
    cadence: 'Aylık',
    signal:
      'Hakediş raporundaki tutarla bankaya geçen tutar aynı değildir. Aradaki farkın nereye yazıldığı önemlidir.',
  },
  {
    slug: 'tesvik-ve-destekler',
    no: '06',
    title: 'Teşvik ve Devlet Destekleri',
    summary:
      'Hak edilen desteğin çoğu, başvurulmadığı için alınmaz. Uygunluk kontrolü ücretsizdir.',
    scope: [
      'KOSGEB destek programlarına uygunluk kontrolü ve başvuru',
      'Yatırım teşvik belgesi süreçlerinin yürütülmesi',
      'Ar-Ge ve tasarım indirimi uygulaması',
      'SGK prim teşviklerinin geriye dönük taranması',
      'Destek sonrası izleme ve raporlama yükümlülükleri',
    ],
    audience: 'İmalatçılar, yatırım yapan şirketler, Ar-Ge faaliyeti yürüten işletmeler',
    cadence: 'Proje bazlı',
    signal:
      'Teşvik alındıktan sonra da yükümlülük devam eder. Raporlama takvimi başvurudan daha kritiktir.',
  },
  {
    slug: 'finansal-raporlama',
    no: '07',
    title: 'Finansal Raporlama',
    summary:
      'Beyanname vergiye, rapor karara hizmet eder. İkisi aynı tablo değildir.',
    scope: [
      'Aylık yönetim raporu: gelir, gider, kârlılık ve kanal kırılımı',
      'Nakit akış tablosu ve 3 aylık nakit projeksiyonu',
      'Bütçe hazırlığı ve gerçekleşme sapma analizi',
      'Banka ve yatırımcı sunumları için finansal tablo hazırlığı',
      'Maliyet yapısının ürün/hizmet bazında çıkarılması',
    ],
    audience: 'Karar için sayıya bakan yöneticiler, kredi veya yatırım süreci yürüten şirketler',
    cadence: 'Aylık / üç aylık',
    signal:
      'Bilanço yılda bir kez konuşulan bir belge olmamalı.',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
