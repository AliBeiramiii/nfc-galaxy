import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import Login from './pages/Login'
import ResetUserInformation from './pages/ChangeInfo'
import Register from './pages/Register'
import Dashboard from './pages/DashBoard'
import PurchaseSteps from './pages/PurchaseSteps'
import ResetPassword from './pages/ResetPassword'


function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="shop" element={<Products/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="contact-us" element={<ContactUs/>}/>
        <Route path="product-purchase-steps" element={<PurchaseSteps/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
      </Route>
        <Route path="/customer/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/editing-information" element={<ResetUserInformation/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
