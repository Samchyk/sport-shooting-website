'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Users, Book, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                A precizitás művészete
              </h1>
              <p className="font-sans text-lg text-foreground/80 mb-8 leading-relaxed">
                Fedezd fel a sportlövészet világát. Tanulj a legmagasabb szintű technikáktól, versenyezz nemzetközi szabályok szerint, és fejleszd a te képességeidet.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/techniques"
                  className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 font-sans font-medium hover:bg-accent transition-colors"
                >
                  Első lépések
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 font-sans font-medium hover:bg-secondary transition-colors"
                >
                  Még több info
                </Link>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/hero-sport-shooting.jpg"
                alt="Professzionális sportlövész verseny során"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-16 text-center">
            Miért válassz minket?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Nemzetközi szabványok',
                description: 'Tanulj az Olympic Games szabályai szerint, versenyzésre felkészülve.'
              },
              {
                icon: Users,
                title: 'Közösség & támogatás',
                description: 'Csatlakozz magyar lövészek nemzetközi közösségéhez.'
              },
              {
                icon: Book,
                title: 'Mélyreható tananyag',
                description: 'Kezdőtől haladóig, minden szinthez részletes útmutató.'
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="font-sans text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-16">
            Sportágak & ágak
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-primary">Pisztoly</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Az airpisztoly, sportpisztoly és gyors tüzet technikákat tanulj. Fejlessz precizitást, stabilitást és konzisztenciát.
              </p>
              <Link href="/techniques" className="inline-flex items-center gap-2 text-primary font-sans font-medium hover:gap-3 transition-all">
                Tudj meg többet <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/pistol-discipline.jpg"
                alt="Pisztoly sportlövészeti ág"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-muted p-8 rounded-lg">
              <div className="space-y-3 font-sans text-sm">
                <p><strong>Air Rifle (10m):</strong> Klasszikus precizitás</p>
                <p><strong>3-pozíciós puskázás:</strong> Állva, térdelve, fekvően</p>
                <p><strong>Hajítás technika:</strong> Puskabajnokság</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-primary">Puska</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                A klasszikus puskázás világában a legtöbb olimpiai verseny zajlik. Tanuld meg az alapokat a haladó technikáig.
              </p>
              <Link href="/techniques" className="inline-flex items-center gap-2 text-primary font-sans font-medium hover:gap-3 transition-all">
                Tudj meg többet <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/rifle-discipline.jpg"
              alt="Puska sportlövészeti ág"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/safety-equipment.jpg"
                alt="Sportlövészeti biztonsági felszerelés"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Biztonság az első helyen
              </h2>
              <p className="font-sans text-foreground/80 leading-relaxed mb-6">
                A sportlövészet biztonságos sport, amikor jól végzik. Tanulj az összes biztonsági eljárásról, szabályzatról és legjobb gyakorlatokról.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Lövészeti lövegkészítés és kezelés',
                  'Lövö-terület biztonsági szabályok',
                  'Személyközpontú biztonság',
                  'Katasztrófa-kezelési protokoll'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 font-sans font-medium hover:bg-accent transition-colors"
              >
                Biztonsági útmutató
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl font-bold text-primary mb-6">
            Készen állsz a kezdésre?
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8 leading-relaxed">
            Csatlakozz a közösségünkhöz és fedezd fel a sportlövészet világát. Kezdj az alapoktól, és fejleszd magad az olimpiai szintig.
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
