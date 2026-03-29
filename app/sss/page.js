import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Sık Sorulan Sorular | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Çocuk terapisi, seans süreçleri ve ücretler hakkında merak edilen sorular.',
}

const faqGroups = [
  {
    title: 'Başlamadan Önce',
    emoji: '🌱',
    faqs: [
      {
        q: 'Çocuğumun psikoloğa ihtiyacı olduğunu nasıl anlarım?',
        a: 'Birkaç haftadır süren davranış değişiklikleri, uyku veya iştah sorunları, okula gitmek istememe, sosyal geri çekilme veya sizi endişelendiren herhangi bir değişiklik profesyonel yardım için yeterli bir neden olabilir. Şüphe duyduğunuzda erken başlamak her zaman daha iyidir.',
      },
      {
        q: 'Çocuğum psikoloğa gitmek istemiyorsa ne yapmalıyım?',
        a: 'Bu çok sık yaşanan bir durum. Çocuğunuza "yardım almaya ihtiyacın var" yerine "duygularını daha iyi anlamana yardımcı olacak biriyle konuşacaksın" gibi olumlu bir çerçeve sunabilirsiniz. İlk seansta mutlaka çocuğun rahat hissetmesi önceliğimizdir.',
      },
      {
        q: 'Kaç yaşındaki çocuklara hizmet veriyorsunuz?',
        a: '4 yaşından 18 yaşına kadar tüm çocuk ve ergenlere hizmet veriyoruz. 4 yaş altı için ebeveyn danışmanlığı ve yönlendirme yapılabilir.',
      },
    ],
  },
  {
    title: 'Seans Süreci',
    emoji: '🧸',
    faqs: [
      {
        q: 'İlk seans nasıl geçer?',
        a: 'İlk seans genellikle yalnızca ebeveynlerle gerçekleşir. Çocuğunuzun geçmişini, şikayetleri ve beklentilerinizi konuşuruz. Bu bilgiler doğrultusunda sonraki adımları planlıyoruz.',
      },
      {
        q: 'Seanslar ne kadar sürer?',
        a: 'Çocuk terapisi seansları 45–50 dakika, ebeveyn seansları ise 60 dakikadır. Online seanslar da aynı sürede gerçekleştirilir.',
      },
      {
        q: 'Seanslar ne sıklıkla yapılır?',
        a: 'Genellikle haftada bir seans önerilir. Yoğun dönemlerde veya belirli durumlarda haftada iki seans da yapılabilir. İlerlemeye bağlı olarak seans sıklığı azalabilir.',
      },
      {
        q: 'Terapi ne kadar sürer?',
        a: 'Bu tamamen çocuğun durumuna bağlıdır. Bazı sorunlar 8–12 seansta önemli ölçüde iyileşirken, bazı durumlar 6 ay ile 1 yıl arasında düzenli destek gerektirebilir. Her aşamada ilerlemeyi birlikte değerlendiriyoruz.',
      },
    ],
  },
  {
    title: 'Pratik Bilgiler',
    emoji: '📋',
    faqs: [
      {
        q: 'Ücretler nedir?',
        a: 'Güncel seans ücretleri için lütfen bizi arayın veya randevu formuyla ulaşın. İlk görüşmede tüm ücretleri şeffaf biçimde paylaşırız. Sigorta kapsamı hakkında da bilgi verebiliriz.',
      },
      {
        q: 'Online terapi yapıyor musunuz?',
        a: 'Evet, hem çocuk terapisi hem ebeveyn danışmanlığı için güvenli online görüşme imkânı sunuyoruz. Yurt dışında yaşayan Türk aileler de online terapi hizmetimizden yararlanabilir.',
      },
      {
        q: 'Seans iptal veya erteleme nasıl yapılır?',
        a: 'Seans saatinizden en az 24 saat önce haber vermenizi rica ediyoruz. Beklenmedik acil durumlar için anlayışla karşılıyoruz.',
      },
      {
        q: 'Bilgilerimiz gizli mi?',
        a: 'Evet, kesinlikle. Paylaştığınız tüm bilgiler gizlidir ve yasal yükümlülükler (çocuğun güvenliğinin tehlikede olması gibi son derece istisnai durumlar) dışında üçüncü kişilerle paylaşılmaz.',
      },
    ],
  },
  {
    title: 'Ebeveynlik',
    emoji: '💚',
    faqs: [
      {
        q: 'Ebeveyn olarak seansa dahil olacak mıyım?',
        a: 'Kesinlikle. Ebeveyn katılımı çocuk terapisinde son derece önemlidir. Düzenli ebeveyn koçluğu seanslarında sizi de sürecin aktif bir parçası yapıyoruz.',
      },
      {
        q: 'Çocuğuma nasıl seans yapıldığını öğrenebilir miyim?',
        a: 'Seansın genel akışını ve ilerlemesini paylaşıyoruz. Ancak terapötik ilişkinin güvenli hissettirmesi için çocuğun anlattıklarının tamamını paylaşmıyoruz. Bu bir sınır değil, sürecin doğal bir parçasıdır.',
      },
    ],
  },
]

export default function SSSPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">SSS</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">Sık Sorulan Sorular</h1>
            <p className="text-stone-500 leading-relaxed">
              Aklınızdaki soruların büyük çoğunluğu burada. 
              Cevabını bulamazsanız bizi arayabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqGroups.map((group, gi) => (
              <div key={gi}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.emoji}</span>
                  <h2 className="font-serif text-2xl text-stone-800">{group.title}</h2>
                </div>
                <div className="space-y-4">
                  {group.faqs.map((faq, fi) => (
                    <div key={fi} className="card hover:border-sage-200">
                      <h3 className="font-medium text-stone-800 mb-2">{faq.q}</h3>
                      <p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-20 px-4 bg-sage-50 text-center">
          <div className="max-w-xl mx-auto">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="section-title mb-4">Başka sorunuz mu var?</h2>
            <p className="text-stone-500 mb-8">Bizi arayabilir veya randevu formundan yazabilirsiniz.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+905551234567" className="btn-outline">
                📞 Bizi Arayın
              </a>
              <Link href="/randevu" className="btn-primary">
                📅 Randevu Al
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
