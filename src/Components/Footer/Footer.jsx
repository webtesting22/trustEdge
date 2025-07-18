import React, { useState } from 'react';
import "./Footer.css";
import { Row, Col, Input } from "antd";
import { IoCallOutline, IoLocationOutline, IoSendSharp, IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (emailError) {
            setEmailError('');
        }
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setEmailError('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            setShowNotification(true);

            // Hide notification after 4 seconds
            setTimeout(() => {
                setShowNotification(false);
            }, 4000);

            // Reset form after 5 seconds
            setTimeout(() => {
                setEmail('');
                setIsSubmitted(false);
                setIsSubmitting(false);
            }, 5000);

        } catch (error) {
            setEmailError('Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    };

    const SocialLinks = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com",
            title: "Facebook"
        },
        {
            icon: <FaTwitter />,
            link: "https://www.twitter.com",
            title: "Twitter"
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com",
            title: "Linkedin"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com",
            title: "Instagram"
        }
    ]
    return (
        <section className="footer-container">
            <div className="Container" style={{ width: "100%" }}>
                <Row gutter={[16, 16]}>
                    {/* Newsletter and Contact Section */}


                    {/* Links and Logo Section */}
                    <Col lg={10} md={24} sm={24} xs={24}>
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
                                           <Link to="/"> <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/HighQualityLogo.png" alt="Logo" /></Link>
                                        </div>
                                        <p style={{marginTop:"0px",color:"rgba(255, 255, 255, 0.6)"}}>Building on its legacy as <span className='white'>Adinath Exim Resources Limited</span>, Trustedge Capital Limited embraces a new era of growth, integrity, and financial innovation.

</p>
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
                    <Col lg={14} md={24} sm={24} xs={24}>
                        <div className="newsletter-section">
                            <h2 className='white'>Subscribe to our newsletter</h2>
                            <form onSubmit={handleNewsletterSubmit}>
                                <div className="newsletter-input">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={isSubmitting || isSubmitted}
                                        className={emailError ? 'error' : ''}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className={`newsletter-btn ${isSubmitted ? 'success' : ''} ${isSubmitting ? 'loading' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <div className="spinner"></div>
                                        ) : isSubmitted ? (
                                            <IoCheckmarkCircle className="success-icon" />
                                        ) : (
                                            <IoSendSharp />
                                        )}
                                    </button>
                                </div>
                                {emailError && (
                                    <div className="error-message">{emailError}</div>
                                )}
                            </form>

                            {/* Success Notification */}
                            {showNotification && (
                                <div className="notification success-notification">
                                    <div className="notification-content">
                                        <IoCheckmarkCircle className="notification-icon" />
                                        <div className="notification-text">
                                            <h4>Successfully Subscribed!</h4>
                                            <p>Thank you for subscribing to our newsletter.</p>
                                        </div>
                                    </div>
                                    <div className="notification-progress"></div>
                                </div>
                            )}

                            <div className="contact-info">
                                <div className="contact-item">
                                    <IoCallOutline className="contact-icon" />
                                    <div>
                                        <p>Call us on</p>
                                        <a href="tel:7069600260">+91-7069600260</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <MdOutlineEmail className="contact-icon" />
                                    <div>
                                        <p>Email us on</p>
                                        <a href="info@trustedgecapital.in">info@trustedgecapital.in</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <IoLocationOutline className="contact-icon" />
                                    <div>
                                        <p>Address</p>
                                        <address>Offices: Mumbai | Ahmedabad</address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Attribution Footer */}
                <div className="attribution-footer">
                    <div className="attribution-content">
                        <p>Designed and Developed by <a href="https://www.outleadsolutions.com/" target="_blank" rel="noopener noreferrer">OutLead Solutions</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;