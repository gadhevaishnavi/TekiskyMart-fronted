import React from 'react'
import Footer from './components/Footer'
import SellWithUs from './components/SellWithUs'
import { Route, Routes } from 'react-router-dom'
import PreOrder from './components/PreOrder'
import CustomerSupport from './components/CustomerSupport'


const App = () => {
  return (
    <>
  
    <Routes>
        <Route path="/SellWithUs" element={<SellWithUs/>}/>
        <Route path="/PreOrder" element={<PreOrder/>}/>
        <Route path="CustomerSupport" element={<CustomerSupport/>}/>
      </Routes>
    <Footer>
      
      
    </Footer>
    </>
  )
}

export default App