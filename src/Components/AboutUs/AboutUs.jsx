import React from "react";
import "./AboutUs.css";
import { Row, Col } from "antd";

const AboutUs = () => {
    return (
        <section className="AboutUsContainer paddingTop ">
            <div className="about-background">
                <svg className="background-svg svg-1" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="rgba(1, 24, 48, 0.05)" strokeWidth="2" />
                    <circle cx="100" cy="100" r="60" stroke="rgba(1, 24, 48, 0.03)" strokeWidth="1" />
                    <circle cx="100" cy="100" r="40" stroke="rgba(1, 24, 48, 0.02)" strokeWidth="1" />
                </svg>
                <svg className="background-svg svg-2" viewBox="0 0 150 150" fill="none">
                    <path d="M20 75L40 55L60 75L80 55L100 75L120 55L140 75" stroke="rgba(1, 24, 48, 0.04)" strokeWidth="2" />
                    <path d="M20 95L40 75L60 95L80 75L100 95L120 75L140 95" stroke="rgba(1, 24, 48, 0.03)" strokeWidth="1" />
                </svg>
                <svg className="background-svg svg-3" viewBox="0 0 120 120" fill="none">
                    <polygon points="60,10 90,50 60,90 30,50" stroke="rgba(1, 24, 48, 0.04)" strokeWidth="2" fill="rgba(1, 24, 48, 0.01)" />
                </svg>
                <svg className="background-svg svg-4" viewBox="0 0 100 100" fill="none">
                    <path d="M10 50Q30 10 50 50T90 50" stroke="rgba(1, 24, 48, 0.05)" strokeWidth="2" />
                    <path d="M10 70Q30 30 50 70T90 70" stroke="rgba(1, 24, 48, 0.03)" strokeWidth="1" />
                </svg>
            </div>

            <div>
                <Row>
                    <Col span={24}>
                        <div className="about-content">
                            <div className="company-header" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                <h1 className="company-name">TrustEdge Capital Limited</h1>
                                <p className="company-tagline">Empowering MSME Growth & Enabling Trust !!!</p>
                            </div>

                            <div className="section-divider" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500">
                                <h3>About Us</h3>
                            </div>

                            <div className="about-description" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1500">
                                <p className="intro-paragraph">
                                    TrustEdge Capital Limited is a new-age financial services company focused on meeting the evolving credit and capital needs of India's Small and Medium Enterprises (SMEs). We bridge the funding gap with a blend of deep sector knowledge, risk-smart underwriting, and agile delivery.
                                </p>
                            </div>

                            <Row gutter={[16, 16]}>
                                <Col lg={12} md={12} sm={24} xs={24}  data-aos="blur-to-clear" data-aos-delay="400" data-aos-duration="1500">
                                    <div className="mission-section">
                                        <div className="mission-content">
                                            <h3>Our Mission</h3>
                                            <p>
                                                Our mission is to empower SMEs to scale with confidence, by providing timely, tailored, and trusted financial solutions. This mission is led by leadership team which brings together deep-rooted industry veterans and seasoned bankers with over 100 years of combined experience in lending, risk, and SME finance.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="500" data-aos-duration="1500">
                                    <div className="expertise-highlight" >
                                        <div className="highlight-card">
                                            <div className="highlight-icon">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                                                    <path d="M9 12l2 2 4-4" />
                                                </svg>
                                            </div>
                                            <div className="highlight-content">
                                                <h4>100+ Years Combined Experience</h4>
                                                <p style={{color: 'white'}}>We blend institutional-grade discipline with entrepreneurial agility to deliver exceptional financial solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default AboutUs;