'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Rólunk
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Egy magyar szervezet, amely a sportlövészet fejlesztésére és terjesztésére dedikál.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/about-community.jpg"
                alt="hungarysportloveszet közösség"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Missziónk
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-4">
              A hungarysportloveszetnak az a célja, hogy népszerűsítse és fejlessze a sportlövészetet Magyarországon. Minden szintű versenyzőt támogatunk az alapoktól az olimpiai szintig.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              Azt hiszünk, hogy a sportlövészet az egyik leghatékonyabb módja a fegyelem, a fókusz és a kitartás fejlesztésének.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Értékek
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Biztonság', desc: 'A biztonság mindig az első prioritás' },
                { title: 'Fegyelem', desc: 'Következetesség és kitartás' },
                { title: 'Integrítás', desc: 'Etikus és felelős lövészet' },
                { title: 'Közösség', desc: 'Támogatás és együttműködés' }
              ].map((value, idx) => (
                <div key={idx} className="bg-secondary p-6 rounded-lg border border-border">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-foreground/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Történetünk
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              A hungarysportloveszet számos év tapasztalatával rendelkezik a sportlövészet oktatásában és versenyeztetésében. Sok olimpiai versenyzőt és nemzetközi bajnokot képeztünk ki az évek során.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
