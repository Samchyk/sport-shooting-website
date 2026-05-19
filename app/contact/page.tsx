'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Kapcsolat
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Kérdéseid vannak? Csatornák keresztül fel tudsz velem kapcsolatba lépni. Az ügyfélszolgálat szívesen segít.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/contact-form.jpg"
                alt="Kapcsolatfelvételi forma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-primary">
                Elérhetőségek
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-primary mb-1">E-mail</h3>
                    <p className="font-sans text-foreground/80">contacts@hungarysportloveszet.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h3 className="font-serif font-bold text-primary mb-3">Gyors válasz</h3>
                <p className="font-sans text-foreground/80 text-sm">
                  Az e-mail válaszok általában 24 órán belül érkeznek. Az ügenforgalmas időszakban akár 48 óra is lehet.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                Üzenet küldése
              </h2>

              {submitted ? (
                <div className="bg-secondary border border-primary p-8 rounded-lg text-center">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Köszönöm az üzenetet!
                  </h3>
                  <p className="font-sans text-foreground/80">
                    Hamarosan kapcsolatba lépünk veled.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-primary mb-2">
                      Név
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="A te neveid"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-primary mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-primary mb-2">
                      Tárgy
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Az üzenet tárgya"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-primary mb-2">
                      Üzenet
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Írd meg az üzeneted..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-secondary px-6 py-3 font-sans font-medium rounded-lg hover:bg-accent transition-colors"
                  >
                    Üzenet küldése
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
