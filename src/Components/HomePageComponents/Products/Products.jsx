import React from "react";
import "./Products.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
const Products = () => {

    const ProductsCardsData = [
        {
            sectionNumber: "01",
            sectionTitle: "Business Loan (BL)",
            backgroundText: "Business Loan",
            services: [
                {
                    icon: "briefcase",
                    title: "Purpose",
                    description: "Business expansion, working capital, equipment purchase & margin funding."
                },
                {
                    icon: "chart",
                    title: "Target Market",
                    description: "Businesses (with already existing banking limits) needing immediate funding to manage short term obligations."
                },
                {
                    icon: "shield",
                    title: "Risk Mitigation",
                    description: "Our exposure in these businesses won't exceed 15% of their existing banking limits."
                },
                //                 {
                //     icon: "calculator",
                //     title: "Credit Scoring Model & Eligibility",
                //     description: "Business credit worthiness assessment using CIBIL/CRIF score & in-house Score Card Rating model. Impetus will be on use of fintech database & decisioning MIS to arrive at correct credit decisioning."
                // }
            ]
        },
        {
            sectionNumber: "02",
            sectionTitle: "Supply Chain Financing (SCF)",
            backgroundText: "Supply Chain Financing",
            services: [
                {
                    icon: "briefcase",
                    title: "Purpose & Overview",
                    description: "Anchor Based Dealer / Suppliers Finance providing short-term working capital finance to optimize cash flows & support to unlock trapped liquidity."
                },
                {
                    icon: "chart",
                    title: "Target Market & Tenure",
                    description: "Businesses requiring funds for their working capital with flexible tenure options ranging from 30-180 days to meet diverse business needs."
                },
                {
                    icon: "handshake",
                    title: "Anchor Partners",
                    description: "Typically Mid Sized Enterprises which look forward to reduce their Receivables & Payables by freeing up trapped cash flows & help drive business productivity."
                },
                // {
                //     icon: "shield",
                //     title: "Dealer / Suppliers Benefits",
                //     description: "They Buy/Supply goods from/to the Anchor & look forward to gain access to short term liquidity quickly in turn inducing cost reduction & efficiency in their daily operations."
                // },
                // {
                //     icon: "calculator",
                //     title: "TECL USP",
                //     description: "Simplified Documentation, Scalability & Quick Disbursal - making the financing process efficient and hassle-free for all stakeholders."
                // }
            ]
        }
    ]

    // Custom SVG Icons
    const IconComponents = {
        briefcase: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="20" width="36" height="24" rx="2" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M20 20V16C20 14.8954 20.8954 14 22 14H38C39.1046 14 40 14.8954 40 16V20" stroke="#333" strokeWidth="2" fill="none" />
                <line x1="12" y1="28" x2="48" y2="28" stroke="#333" strokeWidth="2" />
                <circle cx="30" cy="32" r="2" fill="#333" />
            </svg>
        ),
        handshake: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 25C20 22.7909 21.7909 21 24 21H28L32 25L36 21H40C42.2091 21 44 22.7909 44 25V35C44 37.2091 42.2091 39 40 39H36L32 35L28 39H24C21.7909 39 20 37.2091 20 35V25Z" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="26" cy="27" r="2" fill="#333" />
                <circle cx="34" cy="27" r="2" fill="#333" />
                <path d="M28 32C28 33.1046 29.3431 34 31 34C32.6569 34 34 33.1046 34 32" stroke="#333" strokeWidth="2" fill="none" />
            </svg>
        ),
        chair: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="16" width="24" height="20" rx="2" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M15 28H45C46.1046 28 47 28.8954 47 30V34C47 35.1046 46.1046 36 45 36H15C13.8954 36 13 35.1046 13 34V30C13 28.8954 13.8954 28 15 28Z" stroke="#333" strokeWidth="2" fill="none" />
                <line x1="18" y1="36" x2="18" y2="44" stroke="#333" strokeWidth="2" />
                <line x1="42" y1="36" x2="42" y2="44" stroke="#333" strokeWidth="2" />
                <line x1="18" y1="16" x2="18" y2="12" stroke="#333" strokeWidth="2" />
                <line x1="42" y1="16" x2="42" y2="12" stroke="#333" strokeWidth="2" />
            </svg>
        ),
        chart: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="14" width="32" height="32" rx="2" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M20 34L26 28L32 32L40 24" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="20" cy="34" r="2" fill="#333" />
                <circle cx="26" cy="28" r="2" fill="#333" />
                <circle cx="32" cy="32" r="2" fill="#333" />
                <circle cx="40" cy="24" r="2" fill="#333" />
            </svg>
        ),
        shield: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 12L20 16V28C20 36 25 42 30 44C35 42 40 36 40 28V16L30 12Z" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M26 28L30 32L36 24" stroke="#333" strokeWidth="2" fill="none" />
            </svg>
        ),
        calculator: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="12" width="24" height="36" rx="2" stroke="#333" strokeWidth="2" fill="none" />
                <rect x="22" y="16" width="16" height="6" rx="1" stroke="#333" strokeWidth="1" fill="none" />
                <circle cx="24" cy="28" r="2" fill="#333" />
                <circle cx="30" cy="28" r="2" fill="#333" />
                <circle cx="36" cy="28" r="2" fill="#333" />
                <circle cx="24" cy="34" r="2" fill="#333" />
                <circle cx="30" cy="34" r="2" fill="#333" />
                <circle cx="36" cy="34" r="2" fill="#333" />
                <circle cx="24" cy="40" r="2" fill="#333" />
                <circle cx="30" cy="40" r="2" fill="#333" />
                <circle cx="36" cy="40" r="2" fill="#333" />
            </svg>
        )
    }
    return (
        <section className="ProductsContainer">
            <div style={{ width: "100%" }}>
                <div className="ProductsIntroSection">
                    <div className="Container">
                        <div className="ProductsIntroContent">
                            <h2 className="text-center">Tailored Financial Solutions for Business Growth</h2>
                            <p className="text-center">Empowering businesses with comprehensive financial services designed to fuel expansion, optimize cash flows, and unlock growth potential. From business loans to supply chain financing, our solutions are crafted to meet your unique capital requirements and drive sustainable success.</p>
                        </div>
                    </div>
                </div>

                <div className="StackContainersAnimation">
                    {ProductsCardsData.map((item, index) => (
                        <div className="ProductsCardContainer" key={index}>
                            <div className="ProductsSection">
                                <div className="ProductsSectionHeader">
                                    <p>{item.sectionNumber} - {item.sectionTitle}</p>
                                </div>

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="Container">
                                        <div className="ProductsSectionContent">
                                            <div className="BackgroundText">
                                                {item.backgroundText}
                                            </div>

                                            <div className="ServicesGrid">
                                                <Row gutter={[32, 32]} justify="center">
                                                    {item.services.map((service, serviceIndex) => (
                                                        <Col lg={8} md={12} sm={24} xs={24} key={serviceIndex}>
                                                            <div className="ServiceCard">
                                                                <div className="ServiceIcon">
                                                                    {IconComponents[service.icon]}
                                                                </div>
                                                                <div className="ServiceContent">
                                                                    <h3>{service.title}</h3>
                                                                    <p className="ServiceDescription">{service.description}</p>
                                                                    <div className="ButtonContainer">
                                                                        <button className="BtnCommonStyle addonStyles">Read&nbsp;a&nbsp;More <FaArrowRightLong /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ButtonContainer">
                                <button className="BtnCommonStyle addonStyles">View&nbsp;All <FaArrowRightLong /></button>
                            </div>
                            <br /><br />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;    