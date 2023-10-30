import React, { useState, useEffect, useMemo, memo } from "react";
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../Constant";

const Sidebar = () => {
    const [currentPath, setCurrentPath] = useState({});

    console.log('currentPath', currentPath)

    let data = Object.values(PATH).map((ele) => {
        return ele.path
    });
    console.log('data', data)
    const [isOpen, setIsopen] = useState(false);
    const location = useLocation();

    const ToggleSidebar = () => {
        setIsopen(!isOpen);
    }
    useEffect(() => {
        setIsopen(false);
    }, [location.pathname]);

    const pageName = useMemo(() => {
    }, [location]);
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
                        <p className="navbar-brand text-primary mr-0">{pageName}</p>
                    </div>
                </nav>
                <div className={`sidebars ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            {
                                Object.values(PATH).map((ele) => {
                                    return (
                                        <Link className='mainLinkNav' to={ele.path}>{ele.pageName}</Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}
export default Sidebar

