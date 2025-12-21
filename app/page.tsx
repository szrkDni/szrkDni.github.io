import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import AboutTech from '@/components/about-tech'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutTech />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}


