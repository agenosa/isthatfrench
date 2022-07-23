
import React from 'react';
import About from './Components/About'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import Reservations from './Components/Reservations'
import Nav from './Components/Nav'


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
      <Reservations/>
 
    </div>
  );
}

