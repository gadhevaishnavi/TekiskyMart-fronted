import React from 'react'
import { Routes,Route } from 'react-router-dom'
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
      </Routes>
    </>
  );
}

export default App