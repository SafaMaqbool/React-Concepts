import React from 'react'
import {BrowserRouter, Route,Routes, useParams} from 'react-router-dom'
import Navbar from './MyRouters/Navbar'
import  Home from './MyRouters/Home'
import About from "./MyRouters/About";
import './App.css'
import Employee from './MyRouters/Employee'
import Contact from './MyRouters/Contact';
import Search from './MyRouters/Search';
import Company from './MyRouters/Company';
import Admin from './MyRouters/Admin';
import Faculty from './MyRouters/Faculty';
import Student from './MyRouters/Student';
import Login from './MyRouters/Login';
import Protected from './MyRouters/Protected';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company/" element={<Company />}>
            <Route path="admin" element={<Admin />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="student" element={<Student />} />
          </Route>

          <Route path="/employee/:name/:age" element={<Employee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App