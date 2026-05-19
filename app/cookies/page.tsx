'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function CookiesPage() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Sütik Policy
          </h1>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Mi sind a sütik?</h2>
            <p>
              A sütik (cookies) kis fájlok, amelyeket a weboldal tárol az eszközödön. Ezek segítik a weboldal működését és nyomon követik a felhasználói aktivitást.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. Sütik típusai</h2>
            <p>Az oldalunk a következő sütik típusokat használja:</p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
              <li><strong>Szükséges sütik:</strong> A weboldal működéséhez szükséges</li>
              <li><strong>Analitikai sütik:</strong> Az oldal használatának nyomon követésére</li>
              <li><strong>Marketing sütik:</strong> Hirdetési célokra</li>
              <li><strong>Preferenciaként sütik:</strong> A felhasználó preferenciáinak megjegyzésére</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. Sütik kezelése</h2>
            <p>
              A legtöbb webböngésző automatikusan elfogadja a sütókat. Azonban módosíthatod a beállításaidat, hogy blokkolják vagy töröljenek sütókat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Harmadik féltől származó sütik</h2>
            <p>
              Az oldal tartalmazhat harmadik féltől származó sütiókat. Ezek a sütik más weboldalakon kereshetik fel az adataidat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">5. Sütik módosítása</h2>
            <p>
              Bármikor módosíthatod a sütik preferenciáid. Kérjük, hogy az alábbi gombokkal fejezd ki az irányelveidet.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <button
                onClick={() => setCookieConsent(true)}
                className="px-6 py-3 bg-primary text-secondary font-medium rounded-lg hover:bg-accent transition-colors"
              >
                Összes sütit elfogadom
              </button>
              <button
                onClick={() => setCookieConsent(false)}
                className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Visszautasítom
              </button>
            </div>
            {cookieConsent !== null && (
              <div className="mt-4 p-4 bg-secondary rounded-lg border border-border">
                <p className="text-sm">
                  {cookieConsent
                    ? 'Köszönjük, hogy elfogadtad a sütiókat.'
                    : 'Megértjük. Csak a szükséges sütiókat használjuk.'}
                </p>
              </div>
            )}
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">6. Kapcsolat</h2>
            <p>
              Ha kérdéseid vannak a sütik kezeléséről, kérjük lépj velünk kapcsolatba:
            </p>
            <p className="mt-4">
              E-mail: contacts.hungarysportloveszet.com<br />
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
