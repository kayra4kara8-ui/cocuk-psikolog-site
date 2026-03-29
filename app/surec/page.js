import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terapi Süreci | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Terapi sürecimiz hakkında adım adım bilgi edinin. İlk görüşmeden sona kadar ne bekliyorsunuz?',
}

const steps = [
  {
    num: '01',
    title: 'İlk Başvuru',
    duration: '5 dakika',
    icon: '📞',
    desc: 'Web sitemizdeki randevu formunu doldurun veya bizi arayın. Kısa bir ön bilgi alacağız.',
    details: [
      'Online randevu formu veya telefon',
      'Çocuğunuz hakkında kısa bilgi',
      '24 saat içinde geri dönüş',
      'Uygun seans saati belirleme',
    ],
  },
  {
    num: '02',
    title: 'Ebeveyn Görüşmesi',
    duration: '60 dakika',
    icon: '👨‍👩‍👧',
    desc: 'Çocuğunuz olmadan yalnızca sizinle görüşüyoruz. Endişelerinizi, çocuğunuzun geçmişini ve beklentilerinizi konuşuyoruz.',
    details: [
      'Gelişim geçmişi',
      'Mevcut endişeler ve şikayetler',
      'Aile yapısı ve dinamikleri',
      'Beklentiler ve hedefler',
    ],
  },
  {
    num: '03',
    title: 'Çocukla Tanışma',
    duration: '45–60 dakika',
    icon: '🧸',
    desc: 'Çocuğunuzla güvenli ve eğlenceli bir ortamda tanışıyoruz. Asla zorlamıyoruz; kendi hızında ilerlemesine izin veriyoruz.',
    details: [
      'Oyun odası ortamı',
      'Rahat ve eğlenceli atmosfer',
      'Gözlem ve değerlendirme',
      'Çocukla güven inşası',
    ],
  },
  {
    num: '04',
    title: 'Değerlendirme & Plan',
    duration: '1–2 seans',
    icon: '📋',
    desc: 'Toplanan bilgileri değerlendirip, çocuğunuza özel bir terapi planı hazırlıyoruz. Bu planı sizinle paylaşıyoruz.',
    details: [
      'Kapsamlı değerlendirme raporu',
      'Kişiselleştirilmiş terapi planı',
      'Hedef belirleme',
      'Tahmini süre ve seans sıklığı',
    ],
  },
  {
    num: '05',
    title: 'Terapi Süreci',
    duration: 'Haftalık',
    icon: '🌱',
    desc: 'Düzenli haftalık seanslarla ilerliyoruz. Her birkaç seansta bir size de ilerleme raporu sunuyoruz.',
    details: [
      'Haftalık 50 dakikalık seanslar',
      'Oyun, sanat, BDT teknikleri',
      'Ebeveyn koçluğu seansları',
      'İlerleme değerlendirmeleri',
    ],
  },
  {
    num: '06',
    title: 'Kapanış & Takip',
    duration: 'Kademeli',
    icon: '🎉',
    desc: 'Hedeflere ulaşıldığında kademeli olarak terapiyi sonlandırıyoruz. İhtiyaç halinde takip seansları düzenlenebilir.',
    details: [
      'Kademeli kapanış',
      'Kazanımların pekiştirilmesi',
      'Aile için son rehberlik',
      'Takip seansı imkânı',
    ],
  },
]

export default function SurecPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Süreç</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">Terapi nasıl ilerler?</h1>
            <p className="text-stone-500 leading-relaxed">
              Bilmediğiniz bir sürece adım atmak endişe verici olabilir. 
              Bu yüzden her adımı açıkça anlatıyoruz.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-sage-200 transform md:-translate-x-1/2 hidden md:block"></div>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <div className="card hover:border-sage-200">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{step.icon}</span>
                          <div>
                            <div className="font-medium text-stone-800">{step.title}</div>
                            <div className="text-xs text-stone-400">{step.duration}</div>
                          </div>
                        </div>
                        <p className="text-sm text-stone-500 mb-4 leading-relaxed">{step.desc}</p>
                        <ul className={`space-y-1.5 ${i % 2 === 1 ? 'md:items-end' : ''}`}>
                          {step.details.map((d, j) => (
                            <li key={j} className={`flex items-center gap-2 text-sm text-stone-600 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0"></span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Number bubble */}
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-sage-600 text-white items-center justify-center font-serif text-lg font-light flex-shrink-0 z-10 shadow-lg">
                      {i + 1}
                    </div>

                    {/* Empty space for alternating */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ about process */}
        <section className="py-20 px-4 bg-sage-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-10">Süreçle ilgili sorular</h2>
            <div className="space-y-4">
              {[
                { q: 'İlk seansta ne getirmeliyim?', a: 'Önceki psikolojik değerlendirme veya tanı raporlarınız varsa getirmenizi öneririm. Bunun dışında herhangi bir şey getirmeniz gerekmez.' },
                { q: 'Çocuğuma seans olduğunu söylemeli miyim?', a: 'Evet, dürüst olmak önemlidir. "Duygularını ve düşüncelerini anlayan bir uzmanla konuşacaksın" gibi basit ve pozitif bir açıklama yapabilirsiniz.' },
                { q: 'Seanslar ne kadar sürer?', a: 'Çocuk seansları 45–50 dakika, ebeveyn seansları ise 60 dakikadır.' },
                { q: 'Online terapi gerçek terapinin yerini tutabilir mi?', a: 'Pek çok vaka için online terapi son derece etkilidir. Özellikle ebeveyn danışmanlığı ve ergen terapisi için çok uygun bir formattır.' },
              ].map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-medium text-stone-800 mb-2">{faq.q}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-sage-600 text-white text-center">
          <h2 className="font-serif text-3xl font-light mb-4">İlk adımı atmaya hazır mısınız?</h2>
          <p className="text-sage-100 mb-8">Randevu formunu doldurun, 24 saat içinde dönüş yapıyoruz.</p>
          <Link href="/randevu" className="inline-flex items-center gap-2 bg-white text-sage-700 px-8 py-4 rounded-full font-medium hover:bg-sage-50 transition-colors">
            📅 Randevu Al
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
