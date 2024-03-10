import { useEffect, useState } from 'react'
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
import Dashboard from './pages/Layout/DashBoard'
import PurchaseSteps from './pages/PurchaseSteps'
import ResetPassword from './pages/ResetPassword'
import OrderPOrtfolio from './pages/test'
import SetPortfolio from './pages/SetPortfolio'
import UserInfo from './components/DashboardComponents/UserInfo'
import axios from 'axios'



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
        <Route path="my-account/" element={<Dashboard/>}>
          <Route index element={<UserInfo/>}/>  
        </Route>
      </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ordering" element={<OrderPOrtfolio/>}/>
        <Route path="/editing-information" element={<ResetUserInformation/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/set-Portfolio" element={<SetPortfolio/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
