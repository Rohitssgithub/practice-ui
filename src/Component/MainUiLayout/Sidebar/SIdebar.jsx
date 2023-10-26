import React, { useState, useEffect } from "react";
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);
    const location = useLocation();

    const ToggleSidebar = () => {
        setIsopen(!isOpen);
    }
    useEffect(() => {
        setIsopen(false);
    }, [location.pathname]);
    return (
        <>
            <div className="container-fluid mt-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <div className="form-inline me-auto">
                            <div className="btn btn-primary" onClick={ToggleSidebar} >
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                        <a className="navbar-brand text-primary mr-0">Home</a>
                    </div>
                </nav>
                <div className={`sidebars ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <Link className='' to='/'><i className="fa-solid fa-house"></i><p>Home</p></Link>
                            <Link className='' to='/about'><i className="fa-solid fa-address-card"></i><p>About</p></Link>
                            <Link className='' to='/home'><i className="fa-solid fa-right-from-bracket"></i><p>Logout</p></Link>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}
export default Sidebar

