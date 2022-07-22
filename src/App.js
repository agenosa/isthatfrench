import About from './Components/About'
import Hero from './Components/Hero'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Reservations from './Pages/Reservations'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <About/>

    </Router>
  );
}


      {/* <Home/>
      <About/>
      <Gallery/>
      <Reservations/>
      <Contact/> */}
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes> */}
      {/* <Footer/> */}