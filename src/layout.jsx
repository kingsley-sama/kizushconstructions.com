import React, { Component } from 'react';
import Navbar from './components/menu';
import HeroBanner from './pages/hero';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/footer';
function Layout() {
    const location = useLocation();
    console.log(location)
    return ( 
        <>
            <Navbar />
            <HeroBanner pathname={location.pathname}/>
            <main className='bg-background'>
                <Outlet />
            </main>
            <Footer />
        </>
     );
}

export default Layout;