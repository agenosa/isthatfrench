import About from './Components/About'
import Hero from './Components/Hero'
import Album from './Components/Album'
import Nav from './Components/Nav'


import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <About/>
      <Album/>

    </Router>
  );
}

