import React from 'react';
import '../Navbar/Navbar.css';
import Home from './Home';
import About from './About';

const SideLayout = ({ open }) => {
    return (
        <>
            <div className={open ? 'sidebarLayout activeSideLayout' : 'sidebarLayout'}>
                <Home></Home>
                <About></About>
            </div>
        </>
    )
}

export default SideLayout