import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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
        
        if (isActive) {
            dropdown.classList.remove('active');
        } else {
            dropdown.classList.add('active');
        }
    };

    const handleDesktopDropdownClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`} ref={dropdownRef}>
                            <span onClick={handleDesktopDropdownClick}>
                                Our Products
                                <i className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</i>
                            </span>
                            <ul className={`submenu ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to={"/Lithium-inverter"} onClick={() => setIsDropdownOpen(false)}><li>Lithium-Ion Inverter</li></Link>
                                <Link to={"/Solar-batteries"} onClick={() => setIsDropdownOpen(false)}><li>Solar Batteries</li></Link>
                                <Link to={"/Lithium-batteries"} onClick={() => setIsDropdownOpen(false)}><li>Two/Three Wheelers Batteries</li></Link>
                                <Link to={"/Ess-batteries"} onClick={() => setIsDropdownOpen(false)}><li>ESS Batteries</li></Link>
                                <Link to={"/Telecom-batteries"} onClick={() => setIsDropdownOpen(false)}><li>Telecom Batteries</li></Link>
                            </ul>
                        </li>
                        <Link to={"/Customer"}><li>Customer Support</li></Link>
                        <a href="/contact"><li>Shop Online</li></a>
                    </ul>
                    
                    <span className="menu_icon" onClick={toggleMenu}>☰</span>
                </div>
            </div>

            <div className="sidebar_overlay" onClick={closeMenu}></div>

            <div className="nav_side_bar">
                <div className="sidebar_header">
                    <div className="sidebar_logo">
                        <img src="https://finikelithium.com/static/media/finike-lithium-logo.90a3828be77a0d2e3a5a.png" alt="logo" />
                    </div>
                    <i className="fas fa-close close_sidebar" onClick={closeMenu}>✕</i>
                </div>
                <ul>
                    <Link to={'/'} onClick={closeMenu}><li>Home</li></Link>
                    <Link to={'/About'} onClick={closeMenu}><li>About Us</li></Link>
                    <li className="sidebar-dropdown" onClick={toggleDropdown}>
                        Our Products
                        <ul className="sidebar-submenu">
                            <Link to={"/Lithium-inverter"} onClick={closeMenu}><li>Lithium-Ion Inverter</li></Link>
                            <Link to={"/Solar-batteries"} onClick={closeMenu}><li>Solar Batteries</li></Link>
                            <Link to={"/Lithium-batteries"} onClick={closeMenu}><li>Two/Three Wheelers Batteries</li></Link>
                            <Link to={"/Ess-batteries"} onClick={closeMenu}><li>ESS Batteries</li></Link>
                            <Link to={"/Telecom-batteries"} onClick={closeMenu}><li>Telecom Batteries</li></Link>
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