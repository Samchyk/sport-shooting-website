'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EquipmentPage() {
  const equipment = [
    {
      category: 'Pisztoly',
      items: [
        { name: 'Légpisztoly (Air Pistol)', description: '4.5mm légpisztoly, mérlegelt 500g tömegű' },
        { name: 'Sportpisztoly', description: '22LR kaliberű, félautomata, szabályozott paraméterekkel' },
        { name: 'Lőszer', description: 'Jóváhagyott lőszer, megfelelő energiával' },
      ]
    },
    {
      category: 'Puska',
      items: [
        { name: 'Légpuska', description: '4.5mm légpuska, kevesebb, mint 12 joules energiával' },
        { name: 'Sportpuska', description: '22LR kaliberű, bolt-action, szabályozott paraméterekkel' },
        { name: 'Prizmák és célzó készülékek', description: 'Jóváhagyott optikai vagy mechanikus célzó' },
      ]
    },
    {
      category: 'Személyi védelem',
      items: [
        { name: 'Szemüveg', description: 'Balisztikus szemüveg a sérülések megelőzésére' },
        { name: 'Hallásprotekció', description: 'Fülvédő vagy zajcsökkentő fülvédő' },
        { name: 'Kesztyű', description: 'Nem csúszó, kényelmes lövészeti kesztyű' },
      ]
    },
    {
      category: 'Támogatás felszerelés',
      items: [
        { name: 'Puska támasz', description: 'Megbízható támasz a puska stabilizálásához' },
        { name: 'Vállpogácsa', description: 'Kényelmes vállpogácsa a puska kezeléséhez' },
        { name: 'Csuklótámasz', description: 'Optionális, támogatja a kar stabilitást' },
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
                Felszerelés & Eszközök
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Ismerj meg az alapvető felszereléseket, amelyekre szükséged van a versenyhez. A megfelelő felszerelés kulcsfontosságú a jó teljesítményhez.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/equipment-gear.jpg"
                alt="Sportlövészeti felszerelés"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((category, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-secondary p-6 border-b border-border">
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    {category.category}
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  {category.items.map((item, iidx) => (
                    <div key={iidx}>
                      <h4 className="font-serif text-lg font-bold text-primary mb-2">
                        {item.name}
                      </h4>
                      <p className="font-sans text-foreground/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8">
            Vásárlási útmutató
          </h2>
          <div className="space-y-6 font-sans text-foreground/80 leading-relaxed">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Kezdéshez ajánlott</h3>
              <p>
                Új versenyzőknek ajánljuk, hogy kezdjenek egy alapvető légpisztollyal vagy légpuskával, amely jól kalibrálható és megbízható. Ezek az eszközök relatíve olcsóbbak és kiválóak az alapok elsajátításához.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Minőség és pontosság</h3>
              <p>
                Ahogy fejlődsz, érdemes befektetni a minőségben. A jól készített felszerelés kevesebb szórást okoz és jobban támogatja a teljesítményt.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Tanácsadás</h3>
              <p>
                Mielőtt nagyobb vásárlásra költenél, beszélj egy tapasztalt instruktorral. Olyan felszerelést válassz, amely jól illeszkedik a tested és az ízlésedhez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Kérdéseid vannak?
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8 leading-relaxed">
            Az instruktoraink szívesen segítenek a felszerelés kiválasztásában és az első lépésekben.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 font-sans font-bold text-lg hover:bg-accent transition-colors"
          >
            Írj nekünk
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
