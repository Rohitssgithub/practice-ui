import React from 'react';
import Sidebar from './Sidebar/SIdebar';
import { Outlet } from 'react-router-dom';

const MainUiLayout = () => {
    return (
        <>
            <div>
                <Sidebar></Sidebar>
                <div className='container-fluid'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainUiLayout