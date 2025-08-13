import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleMenu = () => {
        const sideMenu = document.querySelector(".nav_side_bar");
        const menuIcon = document.querySelector(".menu_icon");
        const overlay = document.querySelector(".sidebar_overlay");

        if (sideMenu.classList.contains("showw")) {
            sideMenu.classList.remove("showw");
            overlay.classList.remove("showw");

            document.body.style.overflow = "auto";
        } else {
            sideMenu.classList.add("showw");
            overlay.classList.add("showw");
            document.body.style.overflow = "hidden";
        }
    };

    const closeMenu = () => {
        const sideMenu = document.querySelector(".nav_side_bar");
        const menuIcon = document.querySelector(".menu_icon");
        const overlay = document.querySelector(".sidebar_overlay");
        
        sideMenu.classList.remove("showw");
        overlay.classList.remove("showw");
        
        document.body.style.overflow = "auto";
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = e.target.closest('.sidebar-dropdown');
        const submenu = dropdown.querySelector('.sidebar-submenu');
        const isActive = dropdown.classList.contains('active');
        
        document.querySelectorAll('.sidebar-dropdown').forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        if (isActive) {
            dropdown.classList.remove('active');
        } else {
            dropdown.classList.add('active');
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
                    <ul className="desktop-nav">
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/About'}><li>About Us</li></Link>
                        <li className="dropdown">
                            Our Products
                            <ul className="submenu">
                                <Link to={"/Lithium"} onClick={closeMenu}><li>Lithium-Ion Inverter</li></Link>
                                <a href="/solar"><li>Solar Batteries</li></a>
                            </ul>
                        </li>
                        <Link to={"/Customer"}><li>Customer Support</li></Link>
                        <a href="/contact"><li>Shop Online</li></a>
                    </ul>
                    
                    <span className="menu_icon"  onClick={toggleMenu}>☰</span>
                </div>
            </div>

            {/* Sidebar Overlay */}
            <div className="sidebar_overlay" onClick={closeMenu}></div>

            {/* Mobile Sidebar */}
            <div className="nav_side_bar">
                <div className="sidebar_header">
                    <div className="sidebar_logo">
                        <img src="https://finikelithium.com/static/media/finike-lithium-logo.90a3828be77a0d2e3a5a.png" alt="logo" />
                    </div>
                    <i className="fas fa-close close_sidebar" onClick={closeMenu}></i>
                </div>
                <ul>
                    <Link to={'/'} onClick={closeMenu}><li>Home</li></Link>
                    <Link to={'/About'} onClick={closeMenu}><li>About Us</li></Link>
                    <li className="sidebar-dropdown" onClick={toggleDropdown}>
                        Our Products
                        <ul className="sidebar-submenu">
                            <Link to={"/Lithium"} onClick={closeMenu}><li>Lithium-Ion Inverter</li></Link>
                            <a href="/solar" onClick={closeMenu}><li>Solar Batteries</li></a>
                        </ul>
                    </li>
                    <Link to={"/Customer"} onClick={closeMenu}><li>Customer Support</li></Link>
                    <a href="/contact" onClick={closeMenu}><li>Shop Online</li></a>
                </ul>
            </div>
        </>
    );
};

export default Header;