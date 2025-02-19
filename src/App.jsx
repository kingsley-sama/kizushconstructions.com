import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer'
import HeroBanner from './pages/hero'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={
        <main className='bg-black'>
          <HeroBanner />
          <Footer />
        </main>
      } />
      <Route path="/about" element={< ></>} />
      <Route path="/contact" element={<></>} />
    </Routes>
  </Router>
    
  )
}

export default App
