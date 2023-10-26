import React from 'react'
import Sidebar from './Component/MainUiLayout/Sidebar/SIdebar';
import Navbar from './Component/Navbar/Navbar'
import MainSidebar from './Component/miniSidebar/MainSidebar'
import Layout from './Component/Layout'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Component/SideLayout/Home';
import About from './Component/SideLayout/About';
const App = () => {
  return (
    <>
      {/* <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router> */}
      <RouterProvider router={router} />
      {/* <Header></Header> */}
      {/* <Navbar></Navbar> */}
      {/* <Layout></Layout> */}
      {/* <MainSidebar/> */}
    </>
  )
}

export default App