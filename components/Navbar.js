'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/problemler', label: 'Problemler' },
  { href: '/surec', label: 'Süreç' },
  { href: '/blog', label: 'Blog' },
  { href: '/sss', label: 'SSS' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center">
              <span className="text-sage-600 text-sm">🌱</span>
            </div>
            <div>
              <div className="font-serif text-base font-medium text-stone-800 leading-none">Dr. Ayşe Kaya</div>
              <div className="text-xs text-stone-500 leading-none mt-0.5">Çocuk Psikoloğu</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-sage-700 bg-sage-50 font-medium'
                    : 'text-stone-600 hover:text-sage-700 hover:bg-sage-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/randevu" className="hidden sm:inline-flex btn-primary text-xs px-5 py-2.5">
              📅 Randevu Al
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-3 border-t border-stone-100">
            <nav className="flex flex-col gap-1">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname === link.href
                      ? 'text-sage-700 bg-sage-50 font-medium'
                      : 'text-stone-600 hover:text-sage-700 hover:bg-sage-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/randevu"
                onClick={() => setOpen(false)}
                className="mx-4 mt-2 btn-primary text-center justify-center"
              >
                📅 Randevu Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
