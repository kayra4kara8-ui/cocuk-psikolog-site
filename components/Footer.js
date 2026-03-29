import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-stone-700">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-xl text-white mb-2">Dr. Ayşe Kaya</div>
            <div className="text-sm text-stone-400 mb-4">Çocuk ve Ergen Psikoloğu</div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Çocuğunuzun sağlıklı gelişimi için yanınızdayım. Güvenli, yargısız ve bilimsel temelli terapi ortamı sunuyorum.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="badge bg-sage-800 text-sage-300">🔒 Gizlilik</div>
              <div className="badge bg-sage-800 text-sage-300">💚 Güven</div>
              <div className="badge bg-sage-800 text-sage-300">🌱 Büyüme</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-wider">Sayfalar</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Ana Sayfa'],
                ['/hakkimda', 'Hakkımda'],
                ['/hizmetler', 'Hizmetler'],
                ['/problemler', 'Problemler'],
                ['/surec', 'Terapi Süreci'],
                ['/blog', 'Blog'],
                ['/sss', 'Sık Sorulan Sorular'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-sage-300 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Nişantaşı, Şişli<br />İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+905551234567" className="hover:text-sage-300">+90 555 123 45 67</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@drayse.com" className="hover:text-sage-300">info@drayse.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Pzt–Cmt: 10:00–19:00</span>
              </li>
            </ul>
            <Link href="/randevu" className="inline-flex items-center gap-2 mt-5 bg-sage-600 text-white text-sm px-5 py-2.5 rounded-full hover:bg-sage-700 transition-colors">
              📅 Randevu Al
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2024 Dr. Ayşe Kaya. Tüm hakları saklıdır.</p>
          <p>Bilgileriniz gizlidir ve üçüncü kişilerle paylaşılmaz.</p>
        </div>
      </div>
    </footer>
  )
}
