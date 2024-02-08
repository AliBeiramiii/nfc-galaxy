import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout: React.FC = () => {
  
  return (
    <>
        <Navbar handleNavigation={()=>{}}/>
      <Outlet />
    </>
  )
}

export default Layout