import React, { useState, useEffect } from "react";
import "./Product.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsCardsData from "../HomePageComponents/Products/ProductData";
const Product = () => {
    const [imageWidth, setImageWidth] = useState(70);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate scroll progress (0 to 1)
            const maxScroll = documentHeight - windowHeight;
            const scrollProgress = Math.min(scrollY / (maxScroll * 0.1), 1); // Use first 50% of scroll

            // Calculate width: starts at 70%, increases to 100%
            const newWidth = 70 + (scrollProgress * 30); // 70% + (0-30%)
            setImageWidth(newWidth);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom SVG Icons
    const IconComponents = {
        briefcase: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="briefcaseBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#briefcaseBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1" />
                <rect x="22" y="30" width="36" height="24" rx="2" stroke="rgb(1, 24, 48)" strokeWidth="2" fill="none" />
                <path d="M30 30V26C30 24.8954 30.8954 24 32 24H48C49.1046 24 50 24.8954 50 26V30" stroke="rgb(1, 24, 48)" strokeWidth="2" fill="none" />
                <line x1="22" y1="38" x2="58" y2="38" stroke="rgb(1, 24, 48)" strokeWidth="2" />
                <circle cx="40" cy="42" r="2" fill="#FF6518" />
            </svg>
        ),
        chart: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="chartBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#chartBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1" />
                <rect x="24" y="24" width="32" height="32" rx="2" stroke="rgb(1, 24, 48)" strokeWidth="2" fill="none" />
                <path d="M30 44L36 38L42 42L50 34" stroke="rgb(1, 24, 48)" strokeWidth="2" fill="none" />
                <circle cx="30" cy="44" r="2" fill="#FF6518" />
                <circle cx="36" cy="38" r="2" fill="#FF6518" />
                <circle cx="42" cy="42" r="2" fill="#FF6518" />
                <circle cx="50" cy="34" r="2" fill="#FF6518" />
            </svg>
        ),
        calculator: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="calculatorBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#calculatorBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1" />
                <rect x="28" y="22" width="24" height="36" rx="2" stroke="rgb(1, 24, 48)" strokeWidth="2" fill="none" />
                <rect x="32" y="26" width="16" height="6" rx="1" stroke="rgb(1, 24, 48)" strokeWidth="1" fill="none" />
                <circle cx="34" cy="38" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="40" cy="38" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="46" cy="38" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="34" cy="44" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="40" cy="44" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="46" cy="44" r="2" fill="rgb(1, 24, 48)" />
                <circle cx="34" cy="50" r="2" fill="#FF6518" />
                <circle cx="40" cy="50" r="2" fill="#FF6518" />
                <circle cx="46" cy="50" r="2" fill="#FF6518" />
            </svg>
        )
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="paddingTop">
            <div className="Container">
                {/* Page Header */}
                {/* <div> */}
                <div className="company-header" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                    <h1 className="text-center"> Our Financial Products</h1>
                    <p className="text-center">
                        Comprehensive financing solutions designed to fuel your business growth and expansion.
                        From working capital to term loans, we provide the financial support you need to achieve your goals.
                    </p>
                </div>


                {/* </div> */}
                <div className="ParallaxImageContainer" style={{ width: `${imageWidth}%` }}>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/ProductSectionImage.jpg" alt="" />
                    </div>
                </div>
                {/* Product Sections */}
                <div className="product-sections-container">
                    {ProductsCardsData.map((section, index) => (
                        <div key={index} className="product-section-wrapper paddingTop">
                            <div className="product-section-header">
                                <div className="section-number">{section.sectionNumber}</div>
                                <div className="section-title-content">
                                    <h2 className="section-title">{section.sectionTitle}</h2>
                                    <p className="section-background-text">{section.backgroundText}</p>
                                </div>
                            </div>

                            <div className="services-grid-container">
                                <Row gutter={[40, 40]} justify="center">
                                    {section.services.map((service, serviceIndex) => (
                                        <Col lg={12} md={12} sm={24} xs={24} key={serviceIndex}>
                                            <div className="product-service-card">
                                                <div className="service-card-header">
                                                    <div className="service-icon-container">
                                                        {IconComponents[service.icon]}
                                                    </div>
                                                    <h3 className="service-title">{service.title}</h3>
                                                </div>
                                                <div className="service-content">
                                                    <div className="service-description">
                                                        {service.description}
                                                    </div>
                                                    {/* <div className="service-action">
                                                        <div className="desktop-menu">
                                                            <button className="BtnCommonStyle">Read&nbsp;More <FaArrowRightLong /></button>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <br /> */}

                {/* Call to Action */}
                <div className="product-cta-section">
                    <div className="cta-content">
                        <h2>Ready to Fuel Your Business Growth?</h2>
                        <p>Get in touch with our financial experts to discuss the best financing solution for your business needs.</p>
                        <button className="cta-button">
                            Get Started <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;