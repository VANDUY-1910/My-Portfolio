import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-500 selection:text-neutral-950 relative">
      {/* Cố định Navbar ở trên cùng */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Skills Section */}
        <AboutSkills />

        {/* 3. Projects Section */}
        <Projects />

        {/* 4. Contact Section */}
        <Contact />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}

export default App
