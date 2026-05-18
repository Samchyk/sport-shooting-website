'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function RulesPage() {
  const rules = [
    {
      title: 'Olimpiai szabályok',
      items: [
        'Pisztolylövés 25m, 50 lövés',
        'Puska 300m, 40 lövés',
        'Trap és Skeet lövészet',
        'Csapatverseny és egyéni verseny'
      ]
    },
    {
      title: 'Értékelés rendszer',
      items: [
        'Minden lövés 0-10 pontokkal értékelt',
        'Tízezredik pont a szállítás',
        'Az összpontszám a végső rangsor',
        'Támogatások az 8+ pontokhoz'
      ]
    },
    {
      title: 'Versenyzési fázisok',
      items: [
        'Selejtező fázis - 40 vagy 50 lövés',
        'Végső fázis - 10 vagy 25 lövés',
        'Döntők - a legjobb versenyzőkkel',
        'Egyéni és csapatok versenyek'
      ]
    },
    {
      title: 'Fegyver szabályok',
      items: [
        'Jóváhagyott fegyverértékek',
        'Tűzerőhatárok',
        'Műszaki ellenőrzés az esemény előtt',
        'Szállítási és tárolási szabályok'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Versenyezési Szabályok
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Ismerd meg a nemzetközi versenyezési szabályokat. Minden országnak és szervezetnek lehetnek további helyi szabályai.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/rules-regulation.jpg"
                alt="Versenyezési szabályok"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {rules.map((section, idx) => (
              <div key={idx} className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3 font-sans text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="border border-border p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Részletek az ISSF Szabályokról
            </h3>
            <div className="space-y-6 font-sans text-foreground/80 leading-relaxed">
              <p>
                Az ISSF (International Shooting Sport Federation) a nemzetközi lövészeti versenyeket irányítja. A szabályok folyamatosan frissülnek az olimpiához igazodva.
              </p>
              <p>
                A versenyzőknek tisztában kell lenniük az aktuális szabályokkal, az esemény szervezője által biztosított versenydokumentumokkal, valamint a helyi és nemzeti szövetségek iránymutatásaival.
              </p>
              <p>
                Minden versenyzőnek aláírnia kell a verseny szervezésénél az etikai kódexet és a doping-ellenes nyilatkozatot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
            További recursos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about" className="p-6 border border-border bg-background rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Szövetségi kapcsolatok</h3>
              <p className="font-sans text-foreground/70 text-sm">Kapcsolódj az ISSF-hez és a magyar szövetségekhez</p>
            </Link>
            <Link href="/safety" className="p-6 border border-border bg-background rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Biztonsági útmutató</h3>
              <p className="font-sans text-foreground/70 text-sm">Fedezd fel a szükséges biztonsági protokollokat</p>
            </Link>
            <Link href="/contact" className="p-6 border border-border bg-background rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Ügyfélszolgálat</h3>
              <p className="font-sans text-foreground/70 text-sm">Van kérdéseid? Vedd fel velünk a kapcsolatot</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
