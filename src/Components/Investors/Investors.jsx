import React from "react";
import "./Investors.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const Investors = () => {
    const investorServices = [
        {
            title: "Investor Relations",
            description: "Comprehensive investor communication and engagement services to maintain transparent relationships with stakeholders and potential investors.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            title: "Disclosures",
            description: "Timely and accurate disclosure of material information, financial statements, and regulatory compliance documentation.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                </svg>
            )
        },
        {
            title: "Annual Reports",
            description: "Detailed annual reports showcasing company performance, financial health, strategic initiatives, and future outlook.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Corporate Announcements",
            description: "Official corporate announcements, press releases, and important updates for investors and stakeholders.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11l18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Investors Grievance Redressal",
            description: "Dedicated grievance redressal mechanism to address investor concerns and ensure fair resolution of disputes.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Corporate Governance",
            description: "Strong corporate governance framework ensuring ethical business practices, transparency, and accountability.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 0 0 6.001 6M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 0 0 6.001 6M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            )
        }
    ];

    return (
        <section className="InvestorsContainer ">
            <div>
                <div className="investors-header">
                    <div className="IconsContainer">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/UpdatedBrandIcons.png" alt="" />
                    </div>
                    <h2 className="text-center" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                        Investors
                    </h2>
                    <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500">
                        Comprehensive investor services and transparent communication for sustainable growth partnerships
                    </p>
                </div>

                <div className="investors-grid">
                    <Row gutter={[30, 30]}>
                        {investorServices.map((service, index) => {
                            return (
                                <Col lg={8} md={12} sm={24} xs={24} key={index} data-aos="blur-to-clear"
                                    data-aos-delay={`${300 + index * 100}`}
                                    data-aos-duration="1500">
                                    <div className="investor-card">
                                        <div>
                                        <div className="card-icon">
                                            {service.icon}
                                        </div>
                                        <div className="card-content">
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                            {/* <div className="btnCenterContainer">
                                                <div className="card-arrow">
                                                    <FaArrowRightLong />
                                                </div>
                                            </div> */}
                                        </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Investors;