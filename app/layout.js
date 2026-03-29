import './globals.css'

export const metadata = {
  title: 'Dr. Ayşe Kaya | Çocuk ve Ergen Psikoloğu – İstanbul',
  description: 'İstanbul\'da çocuk ve ergen psikolojisi alanında uzman klinik psikolog. Dikkat eksikliği, kaygı, öfke, sosyal problemler ve okul uyum sorunlarında profesyonel destek.',
  keywords: 'çocuk psikoloğu istanbul, ergen psikolojisi, dikkat eksikliği, çocuk terapisi, çocuk davranış sorunları',
  openGraph: {
    title: 'Dr. Ayşe Kaya | Çocuk Psikoloğu İstanbul',
    description: 'Çocuğunuz için güvenli, yargısız ve profesyonel psikolojik destek.',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-warm-50 text-stone-800 antialiased">{children}</body>
    </html>
  )
}
