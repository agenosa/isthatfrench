
import React from 'react';
import About from './Components/About'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Footer from './Components/Footer'


import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

export default function App() {
  return (
    <div>

      <Nav />
      <Hero />
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
 
    </div>
  );
}

