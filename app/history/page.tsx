'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HistoryPage() {
  const timeline = [
    {
      era: 'Antik kor',
      period: '3000 - 500 i.e.',
      description: 'Az íjászat születésétől az első fegyverzeti fejlődésig. Az íjászat a vadászat és a háború alapvető eszköze volt.'
    },
    {
      era: 'Középkor',
      period: '500 - 1500 k.e.',
      description: 'Az íjászok és a kereszt-íjászok fejlődése. A lövészeti verseny már létezett az európai lovagi turnékon.'
    },
    {
      era: 'Modern kor kezdete',
      period: '1500 - 1800 k.e.',
      description: 'A tűzfegyverek megjelenése. Az első lövészeti versenyek és klub alakultak ebben az időszakban.'
    },
    {
      era: 'Sportlövészet formálódása',
      period: '1800 - 1900',
      description: 'Az első nemzetközi lövészeti versenyek és szabályozás. Az első olimpiai kezdet 1896-ban.'
    },
    {
      era: 'Olimpiai sportlövészet',
      period: '1900 - 1960',
      description: 'A sportlövészet standardizálása és nemzetközi versenyeik. A férfi és női kategóriák fejlődése.'
    },
    {
      era: 'Korszerű lövészet',
      period: '1960 - napjaink',
      description: 'A technológia fejlődése, új versenyszámok és szabályok. A sportlövészet világszintű elismerése.'
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
                A sportlövészet története
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Fedezd fel a sportlövészet érdekes történetét az antik időktől napjainkig.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/history-olympic.jpg"
                alt="Olimpiai sportlövészet története"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {timeline.map((era, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-3 top-2"></div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {era.era}
                    </h3>
                    <p className="font-sans text-sm text-foreground/50">
                      {era.period}
                    </p>
                  </div>
                  <p className="font-sans text-foreground/80 leading-relaxed">
                    {era.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Moments */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12">
            Történelmi fordulópontok
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: '1896',
                event: 'Első olimpiai sportlövészet',
                desc: 'Az első modern olimpián Athénban sportlövészet verseny kerül sorra.'
              },
              {
                year: '1907',
                event: 'ISSF alapítása',
                desc: 'Az Nemzetközi Sportlövészeti Szövetség alakul meg a szabályok standardizálásához.'
              },
              {
                year: '1992',
                event: 'Női versenyző egyenlősége',
                desc: 'A nők és férfiak azonos versenyszámok alatt versenyeznek az olimpián.'
              },
              {
                year: 'napjaink',
                event: 'Világszintű sportág',
                desc: 'A sportlövészet 130+ ország által képviselt olimpiai sportág.'
              }
            ].map((moment, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border">
                <div className="text-4xl font-serif font-bold text-primary/30 mb-2">
                  {moment.year}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {moment.event}
                </h3>
                <p className="font-sans text-foreground/70">
                  {moment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Csatlakozz a történelemhez
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8 leading-relaxed">
            Legyél része a sportlövészet történetének. Kezd el gyakorolni és versenyez a legmagasabb szinten.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 font-sans font-bold text-lg hover:bg-accent transition-colors"
          >
            Vedd fel velünk a kapcsolatot
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
