import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/share/Navber';
import Footer from '../pages/share/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;