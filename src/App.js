
import React from "react";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";


import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Reservation from './Pages/Reservation'
import Admin from './Pages/Admin'
import Nav from './components/nav'
import List from './Pages/List'


function App() {
  return (
    <div>
      <Nav/>
      
       <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/reservation' element={<Reservation />}/>
          <Route path='/amdmin' element={<Admin />}/>
          <Route path='/list' element={<List />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
