import React, { useState } from 'react'
import './Navbar.css'
const Navbar = ({ increaseLengthFun, open }) => {
    return (
        <>
            <div className={open === true ? "sidebarNav activeNav" : 'sidebarNav'}>
                <div className='headerNav'>
                    <button onClick={increaseLengthFun} className='openBtn'>
                        {
                            open ?
                                <i class="fa-solid fa-x" style={{ color: "#eaecf0" }}></i>
                                :
                                <i class="fa-solid fa-bars" style={{ color: "#eaecf0" }}></i>
                        }
                    </button>

                </div>
                <nav>
                    <ul>
                        <li className='linkNav'><i className="fa-solid fa-house"></i><p>Home</p></li>
                        <li className='linkNav'><i className="fa-solid fa-address-card"></i><p>About</p></li>
                        <li className='linkNav'><i className="fa-solid fa-right-from-bracket"></i><p>Logout</p></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar