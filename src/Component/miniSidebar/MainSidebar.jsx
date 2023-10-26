import { useState } from "react";
import logo from "./logo.svg";
import "./MainSidebar.css";

const navItems = ["home", "settings", "backup", "mail", "cloud", "layers"];

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {/* {isOpen ? "close" : "menu"} */}
              {
                isOpen ?
                  <i class="fa-solid fa-x" style={{ color: "#eaecf0" }}></i>
                  :
                  <i class="fa-solid fa-bars" style={{ color: "#eaecf0" }}></i>

              }
            </span>
          </button>
          {/* <img src={logo} className="sidebar-logo" /> */}
          {/* <p>sidebar</p> */}
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button">
              {/* <span className="material-symbols-outlined">{item}</span> */}
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default MainSidebar
