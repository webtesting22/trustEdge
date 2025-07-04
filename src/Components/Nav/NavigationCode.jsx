import React, { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import NavigationLinks from "./NavigationLinks";
import "./NavigationCode.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const NavigationCode = ({ onShowModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    return (
        <section className={`NavigationCode paddingLeft paddingRight ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
            <div style={{ width: "100%" }}>
                <div>
                    <Row>
                        <Col lg={scrolled ? 14 : 12} xs={12}>
                            <div className="LogoAndLinksContainer paddingRight">
                                <div>
                                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HighQualityBlue.png" alt="logo" />
                                    </Link>
                                </div>
                                <div className="desktop-menu">
                                    <ul>
                                        {NavigationLinks.map((link) => (
                                            <li key={link.id}>
                                                {(link.link === 'About' || link.link === 'Products') ? (
                                                    <a href="#" onClick={e => { e.preventDefault(); onShowModal && onShowModal(); }}>{link.link}</a>
                                                ) : (
                                                    <Link to={link.path}>{link.link}</Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={scrolled ? 10 : 12} xs={12}>
                            <div className="NavigationContactContainer">
                                <div className="desktop-menu">
                                    <button className="BtnCommonStyle">Book&nbsp;a&nbsp;call <FaArrowRightLong /></button>
                                </div>
                                <div className="mobile-menu-button">
                                    <MenuOutlined onClick={showDrawer} />
                                </div>
                            </div>
                        </Col>
                    </Row>
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
                                {(link.link === 'About' || link.link === 'Products') ? (
                                    <a href="#" onClick={e => { e.preventDefault(); onShowModal && onShowModal(); }}>{link.link}</a>
                                ) : (
                                    <Link to={link.path} onClick={onClose}>{link.link}</Link>
                                )}
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