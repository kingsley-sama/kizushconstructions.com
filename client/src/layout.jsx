import React, { Component } from 'react';
import Navbar from './components/menu';
import HeroBanner from './pages/hero';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/footer';
const Layout = () => {
    const location = useLocation();
  
    // hide HeroBanner on dynamic child routes like /projects/:id
    const hideHeroBanner = /^\/projects\/[^\/]+$/.test(location.pathname);
  
    return (
      <>
        <Navbar />
        {!hideHeroBanner && <HeroBanner pathname={location.pathname} />}
        <main className="bg-background">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };

export default Layout;