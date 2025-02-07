import React from 'react'
import Footer from './components/Footer'
import SellWithUs from './components/SellWithUs'
import { Route, Routes } from 'react-router-dom'
import PreOrder from './components/PreOrder'
import CustomerSupport from './components/CustomerSupport'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
    <>
  
 
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/SellWithUs" element={<SellWithUs/>}/>
        <Route path="/PreOrder" element={<PreOrder/>}/>
        <Route path="CustomerSupport" element={<CustomerSupport/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App