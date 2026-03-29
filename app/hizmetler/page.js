import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Hizmetler | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Çocuk terapisi, ebeveyn danışmanlığı, psikolojik değerlendirme ve online terapi hizmetleri.',
}

const services = [
  {
    icon: '🧸',
    title: 'Çocuk Terapisi',
    age: '4–12 yaş',
    desc: 'Oyun terapisi, sanat terapisi ve bilişsel davranışçı tekniklerle çocuğunuzun duygusal ve davranışsal zorluklarını ele alıyoruz.',
    bullets: ['Oyun terapisi', 'Sanat terapisi', 'Hikaye anlatımı teknikleri', 'Duygu düzenleme becerileri'],
  },
  {
    icon: '🧑‍🦱',
    title: 'Ergen Terapisi',
    age: '13–18 yaş',
    desc: 'Ergenlik döneminin getirdiği kimlik, akran baskısı, okul stresi ve aile çatışmalarında bireysel destek.',
    bullets: ['Bireysel terapi', 'Kimlik gelişimi', 'Akran ilişkileri', 'Sınav kaygısı'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Ebeveyn Danışmanlığı',
    age: 'Her yaş',
    desc: 'Çocuğunuzla daha sağlıklı iletişim kurmanız, sınır koymanız ve zorlu dönemlerde destek almanız için rehberlik.',
    bullets: ['Ebeveynlik becerileri', 'İletişim teknikleri', 'Sınır koyma', 'Aile dinamikleri'],
  },
  {
    icon: '📊',
    title: 'Psikolojik Değerlendirme',
    age: '4–18 yaş',
    desc: 'Dikkat eksikliği, öğrenme güçlükleri veya duygusal sorunlar için kapsamlı psikolojik değerlendirme ve rapor.',
    bullets: ['DEHB değerlendirmesi', 'Zeka testleri', 'Öğrenme güçlüğü tespiti', 'Detaylı rapor'],
  },
  {
    icon: '💻',
    title: 'Online Terapi',
    age: 'Her yaş',
    desc: 'İstanbul dışından veya yoğun programınız nedeniyle kliniğe gelemeyen aileler için güvenli online görüşme.',
    bullets: ['Şifreli video görüşme', 'Esnek saatler', 'Yurt dışı erişim', 'Ebeveyn danışmanlığı'],
  },
  {
    icon: '🏫',
    title: 'Okul Rehberliği Desteği',
    desc: 'Okul psikolojik danışmanlarıyla iş birliği yaparak çocuğunuzun okul ortamındaki desteğini güçlendiriyoruz.',
    bullets: ['Okul ile koordinasyon', 'IEP desteği', 'Sosyal uyum', 'Öğretmen rehberliği'],
  },
]

export default function HizmetlerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Hizmetler</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">Ne yapıyoruz?</h1>
            <p className="text-stone-500 leading-relaxed">
              Her çocuğun ihtiyacı farklıdır. Bu nedenle kapsamlı ve kişiselleştirilmiş destek sunuyoruz.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="card hover:border-sage-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-serif text-xl text-stone-800">{s.title}</h3>
                    {s.age && (
                      <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full">{s.age}</span>
                    )}
                  </div>
                  <p className="text-sm text-stone-500 mb-4 leading-relaxed flex-1">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-sage-600 text-white text-center">
          <h2 className="font-serif text-3xl font-light mb-4">Hangi hizmetin size uygun olduğundan emin değil misiniz?</h2>
          <p className="text-sage-100 mb-8 max-w-md mx-auto">İlk görüşmede birlikte değerlendiririz. Ücretsiz ön görüşme için randevu alın.</p>
          <Link href="/randevu" className="inline-flex items-center gap-2 bg-white text-sage-700 px-8 py-4 rounded-full font-medium hover:bg-sage-50 transition-colors">
            📅 Randevu Al
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
