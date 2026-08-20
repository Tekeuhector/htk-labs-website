import { useActiveSection } from './hooks/useActiveSection'
import siteConfig from './data/siteConfig'

// Layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Sections
import Hero from './components/Hero'
import Services from './components/Services'
import Problems from './components/Problems'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const sectionIds = siteConfig.navigation.map(nav => nav.href.substring(1))
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <Services />
        <Problems />
        <WhyUs />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
