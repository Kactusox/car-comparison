import React from "react";
import Navbar from './navbar';  
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
  
    return (
      <>
        {/* Hide Navbar on home, login, and signin pages */}
        {location.pathname !== '/'  && <Navbar />}
        {children}
      </>
      // && location.pathname !== '/login' && location.pathname !== '/signin'
    );
}

export default Layout;
  