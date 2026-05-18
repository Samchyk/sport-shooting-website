'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function BlogPage() {
  const categories = ['Mindent', 'Kezdőknek', 'Technikák', 'Edzés', 'Koncentráció', 'Biztonság', 'Történelem', 'Szabályok', 'Felszerelés']

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Blog & Artikeletek
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                Olvass tanácsokról, technikákról és a sportlövészet legújabb híreiről. Rendszeresen frissített tartalom.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-basics.jpg"
                alt="Blog és cikkek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="block border border-border p-8 rounded-lg hover:shadow-lg transition-shadow hover:border-primary"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-sans font-medium rounded">
                        {article.category}
                      </span>
                      <span className="font-sans text-xs text-foreground/50">
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                      {article.title}
                    </h3>
                    <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-sans font-medium group">
                      Olvass tovább
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Maradj kapcsolatban
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8">
            Iratkozz fel új artikelekhez és a sportlövészet legújabb hírihez.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <input
              type="email"
              placeholder="E-mail cím"
              className="px-6 py-3 border border-border bg-background text-foreground rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-secondary px-8 py-3 font-sans font-medium rounded-lg hover:bg-accent transition-colors">
              Iratkozz fel
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
