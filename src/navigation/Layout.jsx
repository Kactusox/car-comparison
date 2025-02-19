import React from "react";
import Navbar from './navbar';  
import { useLocation } from 'react-router-dom';
import AdminDashboard from "../adminpage/admindashboard";

function Layout({ children }) {
    const location = useLocation();
  
    return (
      <>
        {/* Hide Navbar on home, login, and signin pages */}
        {location.pathname !== '/' && location.pathname !== '/admin' && location.pathname !== '/admincar'  && location.pathname !== '/users' 
         && location.pathname !== '/inbox' && location.pathname !== '/login' && location.pathname !== '/signin' 
        && <Navbar />}
        {children}
      </>
      // && location.pathname !== '/login' && location.pathname !== '/signin'
    );
}

export default Layout;
  