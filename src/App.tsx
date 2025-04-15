import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Expertise from './components/sections/Expertise'
import StyleVision from './components/sections/StyleVision'
import BlogSection from './components/sections/BlogSection'
import FAQ from './components/sections/FAQ'
import Pricing from './components/sections/Pricing'
import LoadingScreen from './components/ui/LoadingScreen'

// Importações de CSS
import './styles/animations.css'
import './styles/text-utils.css' // Importar os utilitários de texto responsivo

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Verifica se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Verifica inicialmente
    checkMobile()
    
    // Adiciona listener para redimensionamento
    window.addEventListener('resize', checkMobile)
    
    // Simula carregamento inicial com tempo ajustado para dispositivos
    const loadingTime = isMobile ? 1000 : 1500 // Tempo menor em dispositivos móveis
    
    const timer1 = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    
    const timer2 = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [isMobile])

  // Componentes organizados na ordem que devem aparecer na página
  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'services', component: <Services /> },
    { id: 'expertise', component: <Expertise /> },
    { id: 'about', component: <About /> },
    { id: 'style-vision', component: <StyleVision /> },
    { id: 'gallery', component: <Gallery /> },
    { id: 'pricing', component: <Pricing /> },
    { id: 'testimonials', component: <Testimonials /> },
    { id: 'blog', component: <BlogSection /> },
    { id: 'faq', component: <FAQ /> },
    { id: 'contact', component: <Contact /> }
  ]

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <Layout>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          {/* Renderiza cada seção com ID apropriado */}
          {sections.map((section) => (
            <section 
              key={section.id} 
              id={section.id}
              className="scroll-mt-20" // Ajuste para o header fixo ao usar âncoras
            >
              {section.component}
            </section>
          ))}
        </motion.div>
      </Layout>
    </>
  )
}

export default App