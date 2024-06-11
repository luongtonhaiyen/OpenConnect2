import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navitem() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <NavLink to="/" className="navbar-brand m-0">
            <img src="/img/logo.png" className="navbar-brand-img h-100" alt="main_logo"/>
            <span className="ms-1 font-weight-bold">Open Connect</span>
          </NavLink>
        </div>
        <hr className="horizontal dark mt-0"/>
        <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            {activeItem !== "/" && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/dashboard"
                  className={`nav-link ${activeItem === "/dashboard" ? "active" : ""}`}
                  onClick={() => handleItemClick("/dashboard")}
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">   
                    <i className="fa-solid fa-gauge text-lg opacity-10" aria-hidden="true"style={{color: "black"}}></i>   
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </NavLink>
              </li>
            )}
            {activeItem !== "/transaction" && (
              <li className="nav-item">
                <NavLink
                  to="/transaction"
                  className={`nav-link ${activeItem === "/transaction" ? "active" : ""}`}
                  onClick={() => handleItemClick("/transaction")}
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-money-bill text-lg opacity-10" aria-hidden="true"style={{color: "black"}}></i>   
                  </div>
                  <span className="nav-link-text ms-1">Manage Transaction</span>
                </NavLink>
              </li>
            )}
            {activeItem !== "/account" && (
              <li className="nav-item">
                <NavLink
                  to="/account"
                  className={`nav-link ${activeItem === "/account" ? "active" : ""}`}
                  onClick={() => handleItemClick("/account")}
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-user text-lg opacity-10" aria-hidden="true" style={{color: "black"}}></i>   
                  </div>
                  <span className="nav-link-text ms-1">Manage Account</span>
                </NavLink>
              </li>
            )}
            {activeItem !== "/manageWs" && (
              <li className="nav-item">
                <NavLink
                  to="/manageWs"
                  className={`nav-link ${activeItem === "/manageWs" ? "active" : ""}`}
                  onClick={() => handleItemClick("/manageWs")}
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-hand-holding-heart text-lg opacity-10" aria-hidden="true"style={{color: "black"}}></i>   
                  </div>
                  <span className="nav-link-text ms-1">Manage Workshop</span>
                </NavLink>
              </li>
            )}
            {activeItem !== "/manageCompany" && (
              <li className="nav-item">
                <NavLink
                  to="/manageCompany"
                  className={`nav-link ${activeItem === "/manageCompany" ? "active" : ""}`}
                  onClick={() => handleItemClick("/manageCompany")}
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fa-regular fa-building text-lg opacity-10" aria-hidden="true"style={{color: "black"}}></i>   
                  </div>
                  <span className="nav-link-text ms-1">Manage Company</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
