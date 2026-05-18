'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}

export default async function BlogArticlePage({ params }: Props) {
  const { id } = await params
  const article = blogArticles.find((a) => a.id === id)

  if (!article) {
    notFound()
  }

  const currentIndex = blogArticles.findIndex((a) => a.id === id)
  const nextArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null
  const prevArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-sans font-medium mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={18} />
            Vissza a blogra
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-sans font-medium rounded">
              {article.category}
            </span>
            <span className="font-sans text-xs text-foreground/50">
              {new Date(article.date).toLocaleDateString('hu-HU', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold text-primary mb-8">
            {article.title}
          </h1>
          {article.image && (
            <div className="relative w-full h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-like font-sans text-foreground/80 leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {prevArticle ? (
              <Link
                href={`/blog/${prevArticle.id}`}
                className="block p-6 border border-border rounded-lg hover:shadow-lg transition-shadow hover:border-primary bg-background"
              >
                <div className="flex items-start gap-4">
                  <ArrowLeft size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs text-foreground/50 mb-1">Előző cikk</p>
                    <h3 className="font-serif font-bold text-primary hover:text-accent transition-colors">
                      {prevArticle.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            {nextArticle ? (
              <Link
                href={`/blog/${nextArticle.id}`}
                className="block p-6 border border-border rounded-lg hover:shadow-lg transition-shadow hover:border-primary bg-background text-right"
              >
                <div className="flex items-start gap-4 justify-end">
                  <div>
                    <p className="font-sans text-xs text-foreground/50 mb-1">Következő cikk</p>
                    <h3 className="font-serif font-bold text-primary hover:text-accent transition-colors">
                      {nextArticle.title}
                    </h3>
                  </div>
                  <ArrowRight size={20} className="text-primary mt-1 flex-shrink-0" />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
