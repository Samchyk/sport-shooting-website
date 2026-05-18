'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SafetyPage() {
  const safetyRules = [
    {
      category: 'Fegyver kezelés',
      rules: [
        'Mindig a fegyvert biztonságos, kezelnek a végén tartsa',
        'Soha ne tartsa az ércét vagy egyéb személyes berendezéseket a lövö-területen',
        'Ellenőrizze a fegyvert minden lövés előtt',
        'Biztonságos helyen tároljon és szállítson'
      ]
    },
    {
      category: 'Lövö-terület biztonság',
      rules: [
        'Soha ne hagyjon senkit a lövö-területen vagy az elülső területen',
        'Az összes személynek maradjon mögött a biztonsági vonal mögött',
        'Soha ne fusson vagy ugorjon a lövö-területen',
        'Mindig figyeljen a figyelmeztető jelekre'
      ]
    },
    {
      category: 'Személyi védelem',
      rules: [
        'Viseljen szemüveget és hallásvedelem',
        'Felhasználjon megfelelő ruházatot',
        'Soha ne vigyen szoros öltözet, amely hátratéríthetne',
        'Viseljen szilárd cipőt'
      ]
    },
    {
      category: 'Egészségügyi szabályok',
      rules: [
        'Soha ne lőjön betegen vagy sérülten',
        'Soha ne igyon alkoholt vagy vegyen fel gyógyszert lövés előtt',
        'Tartsuk magunk kipihenikben és figyelmet fordíts az érzelmeire',
        'Azonnal jelezd, ha nem érzi magát biztonságosnak'
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
                Biztonság a lövészésben
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                A biztonság az első prioritás. Tanulj az összes biztonsági szabályzatról és legjobb gyakorlatról, hogy biztonságosan és felelősen versenyezhess.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/safety-equipment.jpg"
                alt="Biztonsági felszerelés"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Rules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {safetyRules.map((section, idx) => (
              <div key={idx} className="border border-border p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.rules.map((rule, ridx) => (
                    <li key={ridx} className="flex gap-3 font-sans text-foreground/80">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-primary p-8 bg-background rounded">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Felelősség
            </h3>
            <p className="font-sans text-foreground/80 leading-relaxed">
              A sportlövészet biztonságos sport, amikor jól végzik. Azonban minden lövés kockázattal jár. Mindig kövesd az összes biztonsági szabályzatot és a szakértői tanácsot. Ha valaha is bizonytalannak érzi magát, kérj segítséget egy tapasztalt instruktortól.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
