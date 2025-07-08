import React from "react";
import "./CompanyMission.css";
import { Row, Col } from "antd";

const CompanyMission = () => {
    // Updated SVG Icons to match the reference image
    const CubeIcon = () => (
        <svg className="animated-icon" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main cube */}
            <g className="cube-main">
                <path d="M35 25 L50 15 L65 25 L50 35 Z" fill="currentColor" opacity="0.9" />
                <path d="M35 25 L35 45 L50 55 L50 35 Z" fill="currentColor" opacity="0.7" />
                <path d="M50 35 L50 55 L65 45 L65 25 Z" fill="currentColor" opacity="0.8" />
            </g>
            {/* Left cube */}
            <g className="cube-left">
                <path d="M15 35 L25 30 L35 35 L25 40 Z" fill="currentColor" opacity="0.6" />
                <path d="M15 35 L15 50 L25 55 L25 40 Z" fill="currentColor" opacity="0.4" />
                <path d="M25 40 L25 55 L35 50 L35 35 Z" fill="currentColor" opacity="0.5" />
            </g>
            {/* Right cube */}
            <g className="cube-right">
                <path d="M65 45 L75 40 L85 45 L75 50 Z" fill="currentColor" opacity="0.6" />
                <path d="M65 45 L65 60 L75 65 L75 50 Z" fill="currentColor" opacity="0.4" />
                <path d="M75 50 L75 65 L85 60 L85 45 Z" fill="currentColor" opacity="0.5" />
            </g>
        </svg>
    );

    const DataAnalysisIcon = () => (
        <svg className="animated-icon" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main data circle */}
            <g className="data-circle">
                <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
                {/* Information/data element inside circle */}
                <circle cx="40" cy="35" r="2" fill="currentColor" />
                <rect x="38" y="40" width="4" height="10" fill="currentColor" rx="1" />
            </g>
            {/* Magnifying glass */}
            <g className="magnifying-glass">
                <circle cx="65" cy="60" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                <line x1="72" y1="67" x2="78" y2="73" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </g>
            {/* Analysis data lines */}
            <g className="analysis-lines">
                <line x1="15" y1="25" x2="25" y2="25" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                <line x1="15" y1="30" x2="20" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                <line x1="15" y1="35" x2="28" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.7" />
            </g>
        </svg>
    );

    return (
        <section style={{ overflow: "hidden" }}>
            <div className="w-100 Container">
                <div className="IconsContainer">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/UpdatedBrandIcons.png" alt="" />
                </div>
                <h2 className="text-center mission-heading" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                    We provide comprehensive financing solutions tailored to your business needs. From business loans and working capital to invoice financing and equipment funding, we empower MSMEs with flexible, accessible credit to fuel their growth and operational excellence.
                </h2>

                <div className="paddingTop paddingBottom">
                    <Row gutter={[40, 40]} className="mission-cards-container">
                        <Col lg={8} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                            <div className="mission-card" >
                                <div className="card-icon-container" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <CubeIcon />
                                </div>
                                <div>
                                    <p><b>Business Loans</b></p>
                                    <p>Unsecured and secured term loans available up to ₹5 Cr.</p>
                                    <p>Working capital financing tailored for manufacturers, traders, and service providers.</p>
                                    <p>Tenure: 12–48 months | Flexible repayment terms.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                            <div className="mission-card" >
                                <div className="card-icon-container" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <DataAnalysisIcon />
                                </div>
                                <div>
                                    <p><b>Invoice Financing</b></p>
                                    <p>Receivables-backed financing to bridge cash flow gaps effectively.</p>
                                    <p>Perfect for MSMEs with a robust client base but extended payment cycles.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                            <div className="mission-card" >
                                <div className="card-icon-container" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <DataAnalysisIcon />
                                </div>
                                <div>
                                    <p><b>Equipment & Capex Finance</b></p>
                                    <p>Financing options for machinery, tools, and plant upgrades to enhance operations.</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </section >
    )
}

export default CompanyMission;