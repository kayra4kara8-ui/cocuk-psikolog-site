import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Problemler | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Dikkat eksikliği, öfke sorunları, kaygı, sosyal problemler ve daha fazlası için profesyonel destek.',
}

const problems = [
  {
    icon: '🧠',
    title: 'Dikkat Eksikliği ve DEHB',
    desc: 'DEHB (Dikkat Eksikliği Hiperaktivite Bozukluğu) çocukların okul ve sosyal yaşamlarını önemli ölçüde etkileyebilir.',
    signs: ['Ders sırasında dikkatini toplayamıyor', 'Ödevlerini bitiremiyor', 'Çok hareketli veya dürtüsel', 'Sırası gelmeyi bekleyemiyor', 'Sürekli eşya kaybediyor'],
    approach: 'Kapsamlı psikolojik değerlendirme, BDT teknikleri ve ebeveyn/öğretmen koçluğu ile çocuğunuzun potansiyelini ortaya çıkarıyoruz.',
  },
  {
    icon: '😤',
    title: 'Öfke ve Davranış Sorunları',
    desc: 'Çocuklarda kontrolsüz öfke, inatçılık ve karşı gelme davranışları hem çocuğu hem aileyi yorar.',
    signs: ['Sık öfke krizleri', 'Kurallara karşı gelme', 'Fiziksel saldırganlık', 'Büyüklere saygısızlık', 'Kardeş çatışmaları'],
    approach: 'Duygu düzenleme becerileri, aile terapisi ve ödül sistemi gibi kanıta dayalı yöntemlerle ev ortamını iyileştiriyoruz.',
  },
  {
    icon: '😰',
    title: 'Kaygı ve Korku',
    desc: 'Çocukluk kaygısı pek çok farklı şekilde kendini gösterir ve günlük yaşamı sekteye uğratabilir.',
    signs: ['Okula gitmek istememe', 'Ebeveynden ayrılmakta güçlük', 'Aşırı endişe ve soru sorma', 'Uyku sorunları', 'Mide ağrısı, baş ağrısı gibi fiziksel belirtiler'],
    approach: 'Bilişsel davranışçı terapi ve maruz kalma teknikleriyle kaygının kaynağına inip kalıcı çözümler üretiyoruz.',
  },
  {
    icon: '👫',
    title: 'Sosyal Problemler',
    desc: 'Akran ilişkileri çocukların gelişimi için kritik önem taşır. Sosyal güçlükler uzun vadeli etkilere yol açabilir.',
    signs: ['Arkadaş edinememe', 'Zorbalığa uğrama veya uygulama', 'Sosyal ortamlardan kaçınma', 'Empati güçlüğü', 'Grup oyunlarına katılamama'],
    approach: 'Sosyal beceri eğitimi, grup terapisi ve rol yapma teknikleriyle sosyal özgüven inşa ediyoruz.',
  },
  {
    icon: '📚',
    title: 'Okul Uyum Sorunları',
    desc: 'Çocukların okula uyum süreci bazen beklenenden zorlu olabilir ve akademik başarıyı olumsuz etkiler.',
    signs: ['Okul fobisi', 'Düşük akademik başarı', 'Öğretmenle çatışma', 'Motivasyon eksikliği', 'Sınav kaygısı'],
    approach: 'Okul psikolojik danışmanlarıyla iş birliği yaparak hem okul hem ev ortamında tutarlı bir destek sunuyoruz.',
  },
  {
    icon: '😢',
    title: 'Duygusal Zorluklar',
    desc: 'Depresyon, düşük özgüven ve kronik mutsuzluk çocuklarda da görülebilen ciddi durumlardır.',
    signs: ['Sürekli üzüntü hali', 'İlgi kayıpları', 'Enerji düşüklüğü', 'Değersizlik hissi', 'İntihar düşünceleri (acil profesyonel yardım gerektirir)'],
    approach: 'Oyun terapisi, BDT ve aile katılımıyla duygusal dayanıklılık ve olumlu öz algı geliştiriyoruz.',
  },
]

export default function ProblemlerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Problemler</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">Hangi konularda yardımcı oluyoruz?</h1>
            <p className="text-stone-500 leading-relaxed">
              Her problem eşsizdir. Ancak bazı zorluklar pek çok ailede ortak görülür. 
              Burada tanıdık bir şey görebilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto space-y-8">
            {problems.map((p, i) => (
              <div key={i} className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-5xl flex-shrink-0">{p.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl text-stone-800 mb-2">{p.title}</h2>
                    <p className="text-stone-500 text-sm mb-4 leading-relaxed">{p.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Belirtiler</div>
                        <ul className="space-y-1.5">
                          {p.signs.map((s, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                              <span className="text-orange-400 mt-0.5 flex-shrink-0">•</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-sage-50 rounded-xl p-4">
                        <div className="text-xs font-medium text-sage-700 uppercase tracking-wider mb-2">Yaklaşımımız</div>
                        <p className="text-sm text-stone-600 leading-relaxed">{p.approach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-sage-600 text-white text-center">
          <h2 className="font-serif text-3xl font-light mb-4">Burada görmediğiniz bir durum mu var?</h2>
          <p className="text-sage-100 mb-8 max-w-md mx-auto">Her çocuk farklıdır. Dilediğiniz konuyu ilk görüşmede paylaşabilirsiniz.</p>
          <Link href="/randevu" className="inline-flex items-center gap-2 bg-white text-sage-700 px-8 py-4 rounded-full font-medium hover:bg-sage-50 transition-colors">
            📅 Randevu Al
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
