import React from 'react'
import NavBar from './NavBar/NavBar'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Kids from './Pages/Kids';
import Blog from './Pages/Blog';
import Men from './Pages/Men';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

import Wishlist from './Pages/Wishlist';
import Discount from './Pages/Discount'
import Menu from './Menu/Menu';
import Women from './Pages/women';
const App = () => {
  return (
    <>
       <BrowserRouter>
      <NavBar/>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/Blogs' element={<Blog/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/discount' element={<Discount/>} />
        <Route path='/women' element={<Women/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
