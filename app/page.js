import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrustBar from '../components/TrustBar'

const testimonials = [
  {
    name: 'Selin A.',
    child: 'Annesiyim, 7 yaşında kız çocuğu',
    text: 'Kızım okula gitmek istemiyordu, sosyal kaygısı çok yüksekti. Dr. Ayşe ile çalıştıktan sonra inanılmaz bir değişim yaşadık. Artık okulda arkadaşları var.',
    stars: 5,
  },
  {
    name: 'Murat K.',
    child: 'Babasıyım, 9 yaşında erkek çocuğu',
    text: 'Oğlumun öfke krizleri bizi çok zorluyor du. Terapi sürecinde hem oğluma hem bize çok değerli araçlar verildi. Ev ortamımız bambaşka bir hal aldı.',
    stars: 5,
  },
  {
    name: 'Zeynep B.',
    child: 'Annesiyim, 12 yaşında kız çocuğu',
    text: 'DEHB tanısı alan kızım için doğru psikolog bulmak çok zordu. Dr. Ayşe\'nin yaklaşımı hem çocuğumu hem beni dinleyen, destekleyen bir yaklaşım. Çok teşekkür ederim.',
    stars: 5,
  },
]

const problems = [
  { icon: '🧠', title: 'Dikkat Eksikliği & DEHB', desc: 'Odaklanma güçlüğü, dürtüsellik, ders başarısızlığı' },
  { icon: '😤', title: 'Öfke & Davranış Sorunları', desc: 'Kriz nöbetleri, karşı gelme, agresif davranışlar' },
  { icon: '😰', title: 'Kaygı & Korku', desc: 'Okul fobisi, ayrılık kaygısı, sosyal kaygı' },
  { icon: '👫', title: 'Sosyal Problemler', desc: 'Akran zorbalığı, yalnızlık, iletişim güçlükleri' },
  { icon: '📚', title: 'Okul Uyum Sorunları', desc: 'Derslerde başarısızlık, motivasyon eksikliği' },
  { icon: '😢', title: 'Duygusal Zorluklar', desc: 'Depresyon belirtileri, düşük özgüven, mutsuzluk' },
]

const steps = [
  { num: '01', title: 'İlk Görüşme', desc: 'Sizi ve çocuğunuzu tanıyoruz. Kaygılarınızı dinliyoruz.' },
  { num: '02', title: 'Değerlendirme', desc: 'Kapsamlı psikolojik değerlendirme yapılır.' },
  { num: '03', title: 'Terapi Planı', desc: 'Çocuğunuza özel kişiselleştirilmiş plan hazırlanır.' },
  { num: '04', title: 'Terapi Süreci', desc: 'Düzenli seanslar ve ebeveyn rehberliği ile ilerleme.' },
]

const faqs = [
  {
    q: 'Çocuğumun psikoloğa gitmesi gerekip gerekmediğini nasıl anlarım?',
    a: 'Çocuğunuzda birkaç haftadır süren uyku sorunları, iştah değişimleri, okula gitmek istememe, arkadaşlarından uzaklaşma veya sizi endişelendiren davranış değişiklikleri varsa profesyonel destek almak yerinde olur.',
  },
  {
    q: 'İlk seans nasıl geçer?',
    a: 'İlk seans önce ebeveynlerle gerçekleşir. Çocuğunuzun gelişim geçmişini, şikayetleri ve beklentilerinizi konuşuruz. Çocukla buluşma ikinci seansta başlar.',
  },
  {
    q: 'Kaç seans gerekir?',
    a: 'Bu tamamen çocuğun ihtiyacına ve sorunun niteliğine bağlıdır. Bazı sorunlar 8–12 seansta çözümlenirken bazı durumlar daha uzun süreli destek gerektirebilir.',
  },
  {
    q: 'Seans ücretleri nedir?',
    a: 'Güncel ücret bilgisi için lütfen bizi arayın veya randevu formundan ulaşın. İlk görüşmede tüm detayları şeffaf şekilde paylaşırız.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero-gradient pt-28 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-xs font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              İstanbul • Nişantaşı • Online Görüşme Mevcut
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-stone-800 leading-tight mb-6">
              Çocuğunuzda bir şeylerin<br />
              <em className="text-sage-600 not-italic">yolunda gitmediğini</em><br />
              hissediyor musunuz?
            </h1>

            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Yalnız değilsiniz. Çocuğunuzun zorlandığını görmek çok ağır bir yük. 
              Profesyonel ve sıcak bir ortamda, bilimsel yöntemlerle yanınızdayım.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/randevu" className="btn-primary text-base px-8 py-4">
                📅 Randevu Oluştur
              </Link>
              <Link href="/surec" className="btn-outline text-base px-8 py-4">
                Süreci İncele →
              </Link>
            </div>

            <p className="mt-6 text-xs text-stone-400">🔒 Bilgileriniz gizlidir · Yargısız ortam · Ücretsiz ön görüşme</p>
          </div>

          {/* Stats */}
          <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 gap-4">
            {[
              { num: '500+', label: 'Aile desteklendi' },
              { num: '10+', label: 'Yıl deneyim' },
              { num: '98%', label: 'Memnuniyet oranı' },
            ].map((s, i) => (
              <div key={i} className="text-center bg-white/60 backdrop-blur rounded-2xl p-5 border border-stone-100">
                <div className="font-serif text-3xl font-light text-sage-600">{s.num}</div>
                <div className="text-xs text-stone-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST BAR */}
        <TrustBar />

        {/* PROBLEMS */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Anlıyoruz</p>
              <h2 className="section-title">Çocuğunuz bu zorluklardan birini mi yaşıyor?</h2>
              <p className="text-stone-500 mt-4 max-w-xl mx-auto">Her çocuğun hikayesi farklıdır. Ama bazı zorluklar pek çok ailede ortak. Tanıdık geliyor mu?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problems.map((p, i) => (
                <div key={i} className="card hover:border-sage-200 group">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-medium text-stone-800 mb-1.5">{p.title}</h3>
                  <p className="text-sm text-stone-500">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/problemler" className="btn-outline">
                Tüm problemleri incele →
              </Link>
            </div>
          </div>
        </section>

        {/* EMPATHY SECTION */}
        <section className="py-20 px-4 bg-sage-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sage-100">
              <div className="text-4xl mb-6 text-center">💚</div>
              <h2 className="section-title text-center mb-6">Sizi duyuyorum</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed max-w-2xl mx-auto text-center">
                <p>
                  "Bir şeyler yanlış ama ne olduğunu tam bilemiyorum." Bu cümle pek çok ebeveynin zihninde dönüp durur.
                  Çocuğunuzu en iyi siz tanırsınız.
                </p>
                <p>
                  Ebeveyn olmak, çocuğunuzun acı çektiğini görüp çaresiz hissetmek demek olabilir. 
                  Ama bu zorluğa tek başınıza katlanmanıza gerek yok.
                </p>
                <p className="font-medium text-sage-700">
                  Burada hiç kimse yargılanmaz. Ne siz, ne çocuğunuz.
                </p>
              </div>
              <div className="text-center mt-8">
                <Link href="/randevu" className="btn-primary">
                  İlk Adımı Atalım →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Süreç</p>
              <h2 className="section-title">Nasıl ilerliyoruz?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="card h-full">
                    <div className="font-serif text-5xl font-light text-sage-200 mb-3">{step.num}</div>
                    <h3 className="font-medium text-stone-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-stone-500">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-sage-300 text-xl z-10">→</div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/surec" className="btn-outline">Süreci detaylı incele →</Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 px-4 bg-warm-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Yorumlar</p>
              <h2 className="section-title">Aileler ne diyor?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <div className="flex text-yellow-400 text-sm mb-4">
                    {'★'.repeat(t.stars)}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="border-t border-stone-100 pt-4">
                    <div className="font-medium text-stone-800 text-sm">{t.name}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{t.child}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">SSS</p>
              <h2 className="section-title">Aklınızdaki sorular</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-medium text-stone-800 mb-2">{faq.q}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/sss" className="btn-outline">Tüm soruları gör →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-4 bg-gradient-to-br from-sage-600 to-sage-800 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🌱</div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-tight">
              Çocuğunuz için<br />en iyi adımı atmaya hazır mısınız?
            </h2>
            <p className="text-sage-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              İlk adım her zaman en zordur. Ama siz buradasınız, bu bile büyük bir cesaret. 
              Birlikte ilerlemeye başlayalım.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/randevu" className="inline-flex items-center gap-2 bg-white text-sage-700 px-8 py-4 rounded-full font-medium hover:bg-sage-50 transition-colors shadow-lg">
                📅 Randevu Oluştur
              </Link>
              <a href="tel:+905551234567" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                📞 Hemen Ara
              </a>
            </div>
            <p className="mt-8 text-sage-200 text-sm">🔒 Bilgileriniz gizlidir · Yargısız bir ortam · Çocuğunuz güvende</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
