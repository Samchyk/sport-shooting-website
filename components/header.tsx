'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Kezdőlap', href: '/' },
    { label: 'Technikák', href: '/techniques' },
    { label: 'Szabályok', href: '/rules' },
    { label: 'Felszerelés', href: '/equipment' },
    { label: 'Biztonság', href: '/safety' },
    { label: 'Blog', href: '/blog' },
    { label: 'Rólunk', href: '/about' },
    { label: 'Kapcsolat', href: '/contact' },
  ]

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="font-serif text-2xl font-bold text-primary">
              Hungarysportloveszet
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-sans text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Menü megnyitása"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-sans text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
