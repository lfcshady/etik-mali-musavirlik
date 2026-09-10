// 🔴 TODO(brief): Kurucu Ali Doğan gerçek bilgiyle dolduruldu (ofisten gelen özgeçmiş belgesi).
// Büroda başka meslek mensubu/çalışan varsa isim, unvan, katılım yılı ve kısa özgeçmişleri
// gönderilmeli — fabrikasyon bir SMMM eklemek meslek etiği ihlalidir, bu yüzden kaldırıldı.
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
    name: 'Ali Doğan',
    title: 'Kurucu · SMMM',
    since: 2003,
    focus: ['Muhasebe ve vergi danışmanlığı', 'Şirket yapılandırma', 'Mükellef temsili'],
    bio: '1988’de Fatih Ticaret Lisesi stajyeri olarak Şişli’de başladığı meslek hayatına aynı yerde dokuz yıl devam etti. Askerliğinin ardından sırasıyla turizm ve sanayi sektörlerinde muhasebe müdürü olarak görev yaptı. 2003’ün Ocak ayında kendi ofisini kurdu; 2019’da bu birikimi kurumsal bir yapıya taşıyarak Etik SM Mali Müşavirlik A.Ş.’yi kurdu.',
  },
];
