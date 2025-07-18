import React, { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import NavigationLinks from "./NavigationLinks";
import InvestorsMegaMenu from "./InvestorsMegaMenu";
import "./NavigationCode.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const NavigationCode = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [megaMenuVisible, setMegaMenuVisible] = useState(false);
    const [megaMenuTimer, setMegaMenuTimer] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled more than 100px for background change
            if (currentScrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Check scroll direction for hide/show animation
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide navbar
                setVisible(false);
            } else {
                // Scrolling up - show navbar
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const showDrawer = () => {
        setDrawerOpen(true);
    };

    const onClose = () => {
        setDrawerOpen(false);
    };

    const handleMegaMenuEnter = () => {
        if (megaMenuTimer) {
            clearTimeout(megaMenuTimer);
            setMegaMenuTimer(null);
        }
        setMegaMenuVisible(true);
    };

    const handleMegaMenuLeave = () => {
        const timer = setTimeout(() => {
            setMegaMenuVisible(false);
        }, 300);
        setMegaMenuTimer(timer);
    };

    return (
        <section className={`NavigationCode paddingLeft paddingRight ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
            <div style={{ width: "100%" }}>
                <div className="nav-layout">
                    {/* Logo Container */}
                    <div className={`nav-logo-container ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'home-route' : 'other-route'}`}>
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HighQualityBlue.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Navigation Links Container */}
                    <div className={`nav-links-container ${scrolled ? 'scrolled' : 'paddingRight'} ${location.pathname === '/' ? 'home-route' : 'other-route'}`}>
                        <div className="desktop-menu">
                            <ul>
                                {NavigationLinks.map((link) => (
                                    <li 
                                        key={link.id}
                                        className={link.hasMegaMenu ? 'has-mega-menu' : ''}
                                        onMouseEnter={link.hasMegaMenu ? handleMegaMenuEnter : undefined}
                                        onMouseLeave={link.hasMegaMenu ? handleMegaMenuLeave : undefined}
                                    >
                                        <Link to={link.path}>{link.link}</Link>
                                        {link.hasMegaMenu && (
                                            <InvestorsMegaMenu 
                                                isVisible={megaMenuVisible}
                                                onMouseEnter={handleMegaMenuEnter}
                                                onMouseLeave={handleMegaMenuLeave}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Button Container */}
                    <div className={`nav-button-container ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'home-route' : 'other-route'}`}>
                        <div className="desktop-menu">
                            <button className="BtnCommonStyle">Book&nbsp;a&nbsp;call <FaArrowRightLong /></button>
                        </div>
                        <div className="mobile-menu-button">
                            <MenuOutlined onClick={showDrawer} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <Drawer
                title={<img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/png (2) (1).png" alt="logo" style={{ width: '100px' }} />}
                placement="right"
                onClose={onClose}
                open={drawerOpen}
                className="mobile-drawer"
                width={300}
            >
                <div className="mobile-menu">
                    <ul>
                        {NavigationLinks.map((link) => (
                            <li key={link.id}>
                                <Link to={link.path} onClick={onClose}>{link.link}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-button">
                        <button className="BtnCommonStyle">Book&nbsp;a&nbsp;call <FaArrowRightLong /></button>
                    </div>
                </div>
            </Drawer>
        </section>
    )
}

export default NavigationCode;