import Link from 'next/link'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-secondary border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-bold mb-4">
              Lövészeti<span className="block text-xs tracking-widest font-sans mt-1">KLUB</span>
            </div>
            <p className="text-sm font-sans leading-relaxed">
              Magyarország vezető sportlövészeti közössége. Dedikálva az oktatásra és a versenyfelkészítésre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Gyors linkek</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="/" className="hover:underline transition-colors">Kezdőlap</Link></li>
              <li><Link href="/techniques" className="hover:underline transition-colors">Technikák</Link></li>
              <li><Link href="/rules" className="hover:underline transition-colors">Szabályok</Link></li>
              <li><Link href="/blog" className="hover:underline transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Erőforrások</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="/equipment" className="hover:underline transition-colors">Felszerelés</Link></li>
              <li><Link href="/safety" className="hover:underline transition-colors">Biztonság</Link></li>
              <li><Link href="/history" className="hover:underline transition-colors">Történelem</Link></li>
              <li><Link href="/about" className="hover:underline transition-colors">Rólunk</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Kapcsolat</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="/contact" className="hover:underline transition-colors">Üzenet küldés</Link></li>
              <li><Link href="/privacy" className="hover:underline transition-colors">Adatvédelem</Link></li>
              <li><Link href="/cookies" className="hover:underline transition-colors">Sütik</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary opacity-30 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-xs text-secondary/80">
          <p> {currentYear} contacts@hungarysportloveszet.com</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Készítette szeretettel <Heart size={14} className="fill-current" />
          </p>
        </div>
      </div>
    </footer>
  )
}
