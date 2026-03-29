export default function TrustBar() {
  const items = [
    { icon: '🔒', text: 'Bilgileriniz gizlidir' },
    { icon: '💚', text: 'Yargısız bir ortam' },
    { icon: '🛡️', text: 'Çocuğunuz güvende' },
    { icon: '🎓', text: '10+ yıl deneyim' },
    { icon: '📋', text: 'Bilimsel yöntemler' },
  ]

  return (
    <div className="trust-bar border-y border-sage-200 py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-sage-700">
              <span>{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
