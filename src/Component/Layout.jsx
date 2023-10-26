import React, { useState } from 'react'
import SideLayout from './SideLayout/SideLayout'
import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.css'

const Layout = () => {
    const [open, setOpen] = useState(false)

    const increaseLengthFun = () => {
        open === true ? setOpen(false) : setOpen(true)
    }

    return (
        <>

            <div className='mainConatiner'>
                <Navbar increaseLengthFun={increaseLengthFun} open={open}></Navbar>
                <SideLayout open={open}></SideLayout>
            </div>
        </>
    )
}

export default Layout