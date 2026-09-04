// 🔴 TODO(brief): EVERY PERSON BELOW IS FICTIONAL PLACEHOLDER DATA.
// A fabricated licensed professional (SMMM) is a professional-conduct problem, not a copy slip.
// These four records must be replaced with the real staff before this site is published.
// See PROFESYONEL-HIZMETLER.md §6.

export type Member = {
  name: string;
  title: string;
  since: number;
  focus: string[];
  bio: string;
};

export const team: Member[] = [
  {
    name: 'Mert Kalaycı',
    title: 'Kurucu Ortak · SMMM',
    since: 2011,
    focus: ['Vergi danışmanlığı', 'Şirket yapılandırma', 'İnceleme süreçleri'],
    bio: 'Büroyu 2011’de kurdu. Ağırlıklı olarak şirket yapılandırma, vergi planlaması ve inceleme süreçlerinde mükellefi temsil eder. Her dosyanın en az bir ortak tarafından biliniyor olmasını büronun çalışma kuralı sayar.',
  },
  {
    name: 'Elif Sarıgül',
    title: 'Ortak · SMMM',
    since: 2016,
    focus: ['E-ticaret muhasebesi', 'Teşvik ve destekler', 'Finansal raporlama'],
    bio: 'Pazaryeri ve dijital satış yapan işletmelerin muhasebe düzeninden ve teşvik başvurularından sorumlu. Yönetim raporlamasını, beyanname sürecinden ayrı bir iş olarak kurgular.',
  },
  {
    name: 'Burak Yalçın',
    title: 'Kıdemli Muhasebe Uzmanı',
    since: 2018,
    focus: ['e-Defter ve e-Belge', 'Mutabakat', 'Dönem sonu işlemleri'],
    bio: 'Aylık muhasebe döngüsünün yürütücüsü. Banka, cari ve pazaryeri mutabakatlarını kapanıştan önce tamamlanmış tutar.',
  },
  {
    name: 'Ceren Aktaş',
    title: 'Bordro ve Özlük Uzmanı',
    since: 2020,
    focus: ['Bordro', 'SGK bildirimleri', 'Özlük dosyaları'],
    bio: 'Bordro hesapları, SGK bildirimleri ve özlük dosyalarının mevzuata uygunluğu ile ilgilenir. İşe giriş ve çıkış bildirimlerinin süresinde yapılması onun takvimidir.',
  },
];
