import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleMenu = () => {
        const sideMenu = document.querySelector(".nav_side_bar");
        const menuIcon = document.querySelector(".menu_icon");

        if (sideMenu.classList.contains("showw")) {
            sideMenu.classList.remove("showw");
            menuIcon.classList.remove("fa-close");
            menuIcon.classList.add("fa-bars");
        } else {
            sideMenu.classList.add("showw");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-close");
        }
    };

    return (
        <>
            <div className="nav fancy-nav">
                <div className="glow-bg-header" />
                <div className="contt">
                    <div className="logo">
                        <img src="https://finikelithium.com/static/media/finike-lithium-logo.90a3828be77a0d2e3a5a.png" alt="logo" />
                    </div>
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/About'}><li>About Us</li></Link>
                        <li className="dropdown">
                            Our Products
                            <ul className="submenu">
                                <a href="/lithium"><li>Lithium Batteries</li></a>
                                <a href="/solar"><li>Solar Batteries</li></a>
                            </ul>
                        </li>
                        <a href="/payment"><li>Customer Support</li></a>
                        <a href="/contact"><li>Shop Online</li></a>
                    </ul>
                    <i className="fas fa-bars menu_icon" onClick={toggleMenu}></i>
                </div>
            </div>

            <div className="nav_side_bar">
                <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/About'}><li>About Us</li></Link>
                    <li>
                        Our Products
                        <ul className="submenu">
                            <a href="/lithium"><li>Lithium Batteries</li></a>
                            <a href="/solar"><li>Solar Batteries</li></a>
                        </ul>
                    </li>
                    <a href="/payment"><li>Customer Support</li></a>
                    <a href="/contact"><li>Shop Online</li></a>
                </ul>
            </div>
        </>
    );
};

export default Header;
