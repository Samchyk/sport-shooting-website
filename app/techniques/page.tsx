'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TechniquesPage() {
  const techniques = [
    {
      title: 'Alaphelyzet (Stance)',
      description: 'Az alaphelyzet az első lépés a sikeres lövéshez. Egy stabil, egyensúlyos testtartás szükséges, amely támogatja a hosszú ideig tartó fegyelem nélküli lövést.',
      details: [
        'Lábak háttal hátig széles',
        'Váll kicsit előre tolva',
        'Fej egyensúlyban tartva',
        'Teljes testmozgás minimalizálva'
      ]
    },
    {
      title: 'Markolat (Grip)',
      description: 'A megfelelő markolat kritikus a fegyver stabilitásához és precizitásához. A markolat nem túl erős és nem túl gyenge, hanem megfelelő.',
      details: [
        'Ujjak megfelelően elhelyezve',
        'Csuklók egyenesek és stabilak',
        'Fegyver közvetlenül a csont alatt',
        'Egyenletes nyomás mindkét oldalon'
      ]
    },
    {
      title: 'Célzás (Aiming)',
      description: 'A helyes célzás a szemnek, a fegyvernek és az agynek való összehangoláson alapul. A vizuális keresés, a mentális fókusz és a fegyver elsajátítása mind szükséges.',
      details: [
        'Szem kicsit megnyitva',
        'Középsors fókuszálva',
        'Oldalsó látás gyengén kihasználva',
        'Célzási pont stabil'
      ]
    },
    {
      title: 'Légzés (Breathing)',
      description: 'A helyes légzés-technika fenntartja a fegyver stabilitását és minimalizálja a test mozgását. Lélegezz mélyen és szabályosan.',
      details: [
        'Szív körül lassított légzés',
        'Lehető hosszabb tartózkodás',
        'Lövés az exhalációs végben',
        'Mély, szabályos légzésritmust'
      ]
    },
    {
      title: 'Lövés (Trigger Control)',
      description: 'A trigger kontroll az egyik legfontosabb készség a sportlövészetben. A trigger-ét finoman és egyenletesen kell húzni anélkül, hogy megmozdítaná a fegyvert.',
      details: [
        'Ujj közepén a trigger',
        'Lassú, egyenletes nyomás',
        'Nem szokás ujjulni',
        'Ütközéshöz mozgatlan kezelés'
      ]
    },
    {
      title: 'Visszapörgés Kontroll (Recoil Control)',
      description: 'A visszapörgés kontroll az, ahogy a test és az agy felkészül és felismeri a visszapörgést. Ez csökkenti az esélyt az egyenlőtlen lövésre.',
      details: [
        'Előzetes megtanulás',
        'Láb stabilizálása',
        'Bicepsz erősítése',
        'Gyors helyreállítási gyakorlat'
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
                Lövészeti Technikák
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Tanulj meg az alapvető technikáktól a fejlett stratégiákig. Szisztematikus fejlődés és kitartás a kulcsa a meisterséghez.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/technique-stance.jpg"
                alt="Sportlövészeti technika és helyzet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map((technique, idx) => (
              <div key={idx} className="border border-border p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  {technique.title}
                </h3>
                <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
                  {technique.description}
                </p>
                <div className="space-y-2">
                  {technique.details.map((detail, didx) => (
                    <div key={didx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="font-sans text-sm text-foreground/70">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Gyakorlás tökélyre
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8 leading-relaxed">
            Ezek a technikák követelnek gyakorlatot és kitartást. Kezdd az alapokkal, majd lépj tovább a fejlett képzésre.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 font-sans font-bold text-lg hover:bg-accent transition-colors"
          >
            Irányítást szeretnél? Vedd fel velünk a kapcsolatot
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
