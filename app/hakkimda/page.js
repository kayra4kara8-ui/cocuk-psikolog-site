import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TrustBar from '../../components/TrustBar'
import Link from 'next/link'

export const metadata = {
  title: 'Hakkımda | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Dr. Ayşe Kaya hakkında bilgi edinin. 10 yılı aşkın deneyimi, uzmanlık alanları ve çalışma felsefesi.',
}

const certifications = [
  'Hacettepe Üniversitesi Psikoloji Lisans',
  'İstanbul Üniversitesi Klinik Psikoloji Yüksek Lisans',
  'Oyun Terapisi Uygulayıcısı Sertifikası',
  'EMDR Çocuk & Ergen Uygulayıcısı',
  'Bilişsel Davranışçı Terapi (BDT) Sertifikası',
  'Türk Psikologlar Derneği Üyesi',
]

const values = [
  { icon: '💚', title: 'Yargısız Ortam', desc: 'Her aile farklıdır. Sizi olduğunuz gibi kabul ediyoruz.' },
  { icon: '🔒', title: 'Tam Gizlilik', desc: 'Paylaştığınız her şey kesinlikle gizli kalır.' },
  { icon: '🧪', title: 'Bilimsel Yaklaşım', desc: 'Kanıta dayalı terapi yöntemleri kullanıyoruz.' },
  { icon: '❤️', title: 'Sıcak İlişki', desc: 'Terapi teknik bir süreç değil, güven ilişkisidir.' },
]

export default function HakkimdaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Hakkımda</p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-6 leading-tight">
                  Dr. Ayşe Kaya
                </h1>
                <div className="text-sage-600 font-medium mb-4">Klinik Psikolog · Çocuk ve Ergen Uzmanı</div>
                <p className="text-stone-600 leading-relaxed mb-6">
                  10 yılı aşkın süredir İstanbul'da çocuklar, ergenler ve aileleriyle çalışıyorum. 
                  Her çocuğun kendine özgü dünyası olduğuna inanıyorum. Bu dünyayı anlamak, 
                  saygı duymak ve içindeki güçlü yanları keşfetmek en temel görevim.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Ebeveynlere de rehberlik etmek benim için çok değerli. Çünkü bir çocuğu iyileştirmek 
                  demek, aynı zamanda tüm aileyi güçlendirmek demektir.
                </p>
                <div className="mt-8">
                  <Link href="/randevu" className="btn-primary">📅 Randevu Al</Link>
                </div>
              </div>

              {/* Placeholder for photo */}
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl flex items-center justify-center max-w-sm mx-auto">
                  <div className="text-center text-sage-500">
                    <div className="text-8xl mb-4">👩‍⚕️</div>
                    <div className="text-sm font-medium">Dr. Ayşe Kaya</div>
                    <div className="text-xs mt-1">Klinik Psikolog</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-stone-100">
                  <div className="text-2xl font-serif text-sage-600 font-light">10+</div>
                  <div className="text-xs text-stone-500">Yıl Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Values */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-title">Çalışma felsefem</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="card text-center">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-medium text-stone-800 mb-2">{v.title}</h3>
                  <p className="text-sm text-stone-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 px-4 bg-sage-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-title">Eğitim & Sertifikalar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-sage-100">
                  <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sage-600 text-sm">✓</span>
                  </div>
                  <span className="text-sm text-stone-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-white text-center">
          <h2 className="section-title mb-4">Birlikte çalışmaya hazır mısınız?</h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">İlk adımı atmak için sizi bekliyorum.</p>
          <Link href="/randevu" className="btn-primary">📅 Randevu Oluştur</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
