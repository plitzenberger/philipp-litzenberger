import { Header } from '~/components/header'
import { Hero } from '~/components/hero'
import { Featured } from '~/components/featured'
import { Thoughts } from '~/components/thoughts'
import { Projects } from '~/components/projects'
import { Footer } from '~/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Featured />
      <Thoughts />
      <Projects />
      <Footer />
    </main>
  )
}
