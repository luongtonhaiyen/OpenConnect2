import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className="header__logo">
                            <a href="/"><img src="img/open.png" alt="logo" /></a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li>
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/product" className="nav-link">Workshop</Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="nav-link">History</Link>
                                </li>
                                <li>
                                    <Link to="#" className="nav-link">Pages</Link>
                                    <ul className="dropdown">
                                        <li>
                                            <Link to="/product-details" className="nav-link">Workshop Details</Link>
                                        </li>
                                        <li>
                                            <Link to="/Cart" className="nav-link">Booking Tickets</Link>
                                        </li>
                                        <li>
                                            <Link to="/Checkout" className="nav-link">Checkout</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/About" className="nav-link">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/Contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__right">
                            <div className="header__right__auth">
                                <Link to="/Login" className="nav-link">Login</Link>
                                <Link to="/Register" className="nav-link">Register</Link>
                            </div>
                            <ul className="header__right__widget">
                                <li><span className="icon_search search-switch"></span></li>
                                <li>
                                    <Link to="#" className="nav-link"><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="./Cart" className="nav-link"><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}
