import React from 'react';
import "./Footer.css";
import { Row, Col, Input } from "antd";
import { IoCallOutline, IoLocationOutline, IoSendSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {

    const SocialLinks = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com",
            title: "Facebook"
        },
        {
            icon: <FaTwitter />,
            link: "https://www.twitter.com",
            title:"Twitter"
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com",
            title:"Linkedin"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com",
            title:"Instagram"
        }
    ]
    return (
        <section className="footer-container">
            <div className="Container" style={{ width: "100%" }}>
                <Row gutter={[16, 16]}>
                    {/* Newsletter and Contact Section */}
                   

                    {/* Links and Logo Section */}
                    <Col lg={8} md={24} sm={24} xs={24}>
                        <div className="footer-links-section">
                            {/* <Row gutter={[30, 30]}>
                                <Col lg={8} md={8} sm={24} xs={24}>
                                    <div className="footer-links">
                                        <h3>Page links</h3>
                                        <ul>
                                            <li><a href="/home-1">Home 1</a></li>
                                            <li><a href="/home-2">Home 2</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/service">Service Details</a></li>
                                            <li><a href="/case-grid">Case Grid</a></li>
                                            <li><a href="/case-list">Case List</a></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={8} md={8} sm={24} xs={24}>
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="/team">Team</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="/careers">Careers</a></li>
                                            <li><a href="/pricing">Pricing</a></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={8} md={8} sm={24} xs={24}>
                                    <div className="footer-links">
                                        <h3>Utility links</h3>
                                        <ul>
                                            <li><a href="/style-guide">Style Guide</a></li>
                                            <li><a href="/instructions">Instructions</a></li>
                                            <li><a href="/licenses">Licenses</a></li>
                                            <li><a href="/changelog">Changelog</a></li>
                                            <li><a href="/404">Error 404</a></li>
                                            <li><a href="/password">Password Protected</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row> */}

                            <div className="footer-bottom">
                                <Row gutter={[16, 16]}>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <div className="footer-logo">
                                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/png 12.png" alt="Logo" />
                                        </div>
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}    >
                                        <div className='social-links'>
                                            <ul>
                                                {SocialLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link}>{link.icon} {link.title}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={16} md={24} sm={24} xs={24}>
                        <div className="newsletter-section">
                            <h2 className='white'>Subscribe to our newsletter</h2>
                            <div className="newsletter-input">
                                <Input type="email" placeholder="Enter your email address" />
                                <button type="submit">
                                    <IoSendSharp />
                                </button>
                            </div>

                            <div className="contact-info">
                                <div className="contact-item">
                                    <IoCallOutline className="contact-icon" />
                                    <div>
                                        <p>Call us on</p>
                                        <a href="tel:+911234567890">+91 123 456 789</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <MdOutlineEmail className="contact-icon" />
                                    <div>
                                        <p>Email us on</p>
                                        <a href="mailto:hello@example.com">hello@example.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <IoLocationOutline className="contact-icon" />
                                    <div>
                                        <p>Address</p>
                                        <address>Chicago HQ Estica Cop. Macomb, MI 48042</address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Footer;