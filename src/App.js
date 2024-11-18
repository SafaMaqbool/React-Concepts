import React from 'react'
import {BrowserRouter, Route,Routes, useParams} from 'react-router-dom'
import Navbar from './MyRouters/Navbar'
import  Home from './MyRouters/Home'
import About from "./MyRouters/About";
import './App.css'
import Employee from './MyRouters/Employee'
import Contact from './MyRouters/Contact';
import Search from './MyRouters/Search';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />

          <Route path="/employee/:name/:age" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App