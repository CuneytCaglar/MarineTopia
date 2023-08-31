import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Body from './components/Body'
import { Route, Routes } from 'react-router-dom'
import Donate from './components/Donate'
import AboutUs from './components/AboutUs'



function App() {
  
  return (
    <>
      <div className='App background-image'>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      <div className='App footer-image'>
      <Footer />
      </div>
      </div>
      
       
           
    </>
  )
}

export default App
