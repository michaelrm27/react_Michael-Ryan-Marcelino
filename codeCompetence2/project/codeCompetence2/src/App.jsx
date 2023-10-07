import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className='bg'>
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
