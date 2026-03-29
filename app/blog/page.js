import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Dr. Ayşe Kaya – Çocuk Psikoloğu',
  description: 'Çocuk psikolojisi, ebeveynlik ve gelişim üzerine bilgilendirici makaleler.',
}

const posts = [
  {
    slug: 'cocugunuzun-ozkaygi',
    title: 'Çocuğunuzun Kaygısını Nasıl Tanırsınız?',
    category: 'Kaygı',
    date: '12 Kasım 2024',
    readTime: '5 dk',
    excerpt: 'Çocukluk kaygısı her zaman açık şekilde kendini göstermez. Mide ağrısı, okula gitmek istememe ve uyku sorunları kaygının "gizli" belirtileri olabilir.',
    emoji: '😰',
  },
  {
    slug: 'ofke-krizleriyle-basa-cikma',
    title: 'Öfke Krizleriyle Nasıl Başa Çıkılır?',
    category: 'Davranış',
    date: '28 Ekim 2024',
    readTime: '7 dk',
    excerpt: 'Çocuğunuzun öfke krizi sırasında ne yaparsanız durum ya iyileşir ya da kötüleşir. Uzmanların önerdiği pratik yöntemleri keşfedin.',
    emoji: '😤',
  },
  {
    slug: 'ekran-suresi-ve-cocuk',
    title: 'Ekran Süresi ve Çocuk Davranışları Arasındaki İlişki',
    category: 'Gelişim',
    date: '15 Ekim 2024',
    readTime: '6 dk',
    excerpt: 'Günde kaç saat ekran? Bu sorunun basit bir cevabı yok. Ekran türü, içerik ve birlikte geçirilen zaman kalitesi en belirleyici faktörler.',
    emoji: '📱',
  },
  {
    slug: 'sınır-koymak-sevgisizlik-mi',
    title: '"Sınır Koymak Sevgisizlik mi?" – Hayır, Tam Tersi',
    category: 'Ebeveynlik',
    date: '3 Ekim 2024',
    readTime: '5 dk',
    excerpt: 'Çocuklarına "hayır" diyemeyen ebeveynler aslında onları sevdikleri için yapar. Ama araştırmalar aksini söylüyor. Neden sınırlar sevgidir?',
    emoji: '🤝',
  },
  {
    slug: 'dehb-ev-stratejileri',
    title: 'DEHB\'li Çocuklar İçin Evde Uygulanabilir 10 Strateji',
    category: 'DEHB',
    date: '18 Eylül 2024',
    readTime: '8 dk',
    excerpt: 'DEHB tanısı alan bir çocuğu büyütmek yorucu olabilir. Ama doğru ortam ve rutinlerle ev hayatı çok daha akıcı hale gelebilir.',
    emoji: '🧠',
  },
  {
    slug: 'okul-degisimi-uyum',
    title: 'Okul Değişimi: Çocuğunuzu Uyuma Hazırlamanın Yolları',
    category: 'Okul',
    date: '5 Eylül 2024',
    readTime: '5 dk',
    excerpt: 'Yeni okul, yeni arkadaşlar, yeni kurallar. Bu değişim bazı çocuklar için heyecan verici, bazıları için çok zorlayıcı olabilir.',
    emoji: '🏫',
  },
]

const categories = ['Tümü', 'Kaygı', 'Davranış', 'Gelişim', 'Ebeveynlik', 'DEHB', 'Okul']

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-sage-50 to-warm-50 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-sage-600 text-sm font-medium uppercase tracking-widest mb-3">Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-4">Faydalı Yazılar</h1>
            <p className="text-stone-500 leading-relaxed">
              Çocuk psikolojisi, ebeveynlik ve gelişim üzerine bilgilendirici içerikler.
            </p>
          </div>
        </section>

        {/* Category filter (decorative) */}
        <section className="bg-white border-b border-stone-100 py-4 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${i === 0 ? 'bg-sage-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-sage-50 hover:text-sage-700'}`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <article key={i} className="card group hover:border-sage-200 flex flex-col">
                  <div className="text-4xl mb-4">{post.emoji}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-sage-100 text-sage-700 px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-xs text-stone-400">{post.readTime} okuma</span>
                  </div>
                  <h2 className="font-serif text-lg text-stone-800 mb-2 group-hover:text-sage-700 transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <span className="text-xs text-stone-400">{post.date}</span>
                    <span className="text-sm text-sage-600 font-medium group-hover:underline">Devamını oku →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4 bg-sage-50">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="section-title mb-3">Yeni yazıları kaçırmayın</h2>
            <p className="text-stone-500 mb-8 text-sm">Her ay 2–3 faydalı yazı göndeririz. Spam yok, yalnızca değerli içerik.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-full border border-stone-200 text-sm focus:outline-none focus:border-sage-400 bg-white"
              />
              <button className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
                Abone Ol
              </button>
            </div>
            <p className="text-xs text-stone-400 mt-3">🔒 E-posta adresiniz gizlidir ve paylaşılmaz.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
