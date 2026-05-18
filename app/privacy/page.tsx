'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Adatvédelem
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Adatkezelés</h2>
            <p>
              A Lövészeti Klub (továbbiakban: &quot;szervezet&quot;) megkötelezi magát a személyes adatok védelme iránt. Ez az adatvédelmi szabályzat leírja, hogyan gyűjtjük, használjuk és védjük az adatokat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. Adatok gyűjtése</h2>
            <p>
              A szervezet a következő adatokat gyűjtheti:
            </p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
              <li>Név, e-mail cím és telefonszám</li>
              <li>Kapcsolati információk</li>
              <li>Weboldal használati adatok</li>
              <li>Böngészési előzmények és IP cím</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. Adathasználat</h2>
            <p>
              Az adatokat a szervezet a következő célokra használja:
            </p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
              <li>Ügyfélszolgálat nyújtása</li>
              <li>Weboldal fejlesztése</li>
              <li>Marketing kommunikáció</li>
              <li>Biztonság és csalás megelőzése</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Adatbiztonság</h2>
            <p>
              A szervezet megfelelő biztonsági intézkedéseket tesz az adatok védelme érdekében. Azonban az interneten történő adatátvitel sosem 100%-ban biztonságos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">5. Adatok megosztása</h2>
            <p>
              A szervezet nem osztja meg a személyes adatokat harmadik felekkel, kivéve ha jogszerűen erre köteles vagy a felhasználó kifejezetten hozzájárult.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">6. Felhasználói jogok</h2>
            <p>
              A felhasználónak joga van:
            </p>
            <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
              <li>Hozzáférni a személyes adatokhoz</li>
              <li>Módosítani a személyes adatokat</li>
              <li>Törölni a személyes adatokat</li>
              <li>Megtagadni az adatfeldolgozást</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">7. Kapcsolat</h2>
            <p>
              Ha kérdéseid vannak az adatvédelemről, kérlek vedd fel velünk a kapcsolatot:
            </p>
            <p className="mt-4">
              E-mail: info@loveszeticlub.hu<br />
              Telephely: Budapest, Magyarország
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
