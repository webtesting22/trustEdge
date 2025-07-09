import React from "react";
import "./Moats.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

// Professional SVG Icons
const RocketIcon = () => (
    <svg className="moat-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="rocketBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05"/>
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#rocketBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1"/>
        <path d="M50 25C48 25 46 26 45 28L42 32C41.5 33 41.5 34 42 35L45 42C46 44 48 45 50 45C52 45 54 44 55 42L58 35C58.5 34 58.5 33 58 32L55 28C54 26 52 25 50 25Z" fill="white"/>
        <path d="M50 45C49 45 48 45.5 47.5 46.5L45 52C44.5 53 44.5 54 45 55L47.5 60C48 61 49 61.5 50 61.5C51 61.5 52 61 52.5 60L55 55C55.5 54 55.5 53 55 52L52.5 46.5C52 45.5 51 45 50 45Z" fill="white"/>
        <circle cx="50" cy="32" r="2" fill="#FF6518"/>
        <path d="M35 60L40 62L38 67L33 65Z" fill="white"/>
        <path d="M65 60L67 65L62 67L60 62Z" fill="white"/>
        <path d="M48 65L52 65L51 70L49 70Z" fill="white"/>
    </svg>
);

const FactoryIcon = () => (
    <svg className="moat-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="factoryBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05"/>
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#factoryBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1"/>
        <rect x="25" y="45" width="15" height="25" fill="white"/>
        <rect x="35" y="40" width="15" height="30" fill="white"/>
        <rect x="45" y="42" width="15" height="28" fill="white"/>
        <rect x="28" y="48" width="3" height="4" fill="#FF6518"/>
        <rect x="34" y="48" width="3" height="4" fill="#FF6518"/>
        <rect x="28" y="58" width="3" height="4" fill="#FF6518"/>
        <rect x="34" y="58" width="3" height="4" fill="#FF6518"/>
        <rect x="38" y="45" width="3" height="4" fill="#FF6518"/>
        <rect x="44" y="45" width="3" height="4" fill="#FF6518"/>
        <rect x="38" y="55" width="3" height="4" fill="#FF6518"/>
        <rect x="44" y="55" width="3" height="4" fill="#FF6518"/>
        <rect x="48" y="48" width="3" height="4" fill="#FF6518"/>
        <rect x="54" y="48" width="3" height="4" fill="#FF6518"/>
        <rect x="48" y="58" width="3" height="4" fill="#FF6518"/>
        <rect x="54" y="58" width="3" height="4" fill="#FF6518"/>
        <path d="M38 37L41 30L44 37Z" fill="white"/>
        <path d="M48 39L51 32L54 39Z" fill="white"/>
        <rect x="20" y="70" width="50" height="2" fill="white"/>
    </svg>
);

const TargetIcon = () => (
    <svg className="moat-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="targetBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6518" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#FF6518" stopOpacity="0.05"/>
            </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#targetBg)" stroke="rgba(255,101,24,0.3)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="50" cy="50" r="18" fill="none" stroke="#FF6518" strokeWidth="2"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="50" cy="50" r="6" fill="#FF6518"/>
        <circle cx="50" cy="50" r="3" fill="white"/>
        <path d="M65 35L70 30L73 33L68 38Z" fill="white"/>
        <line x1="68" y1="33" x2="60" y2="41" stroke="white" strokeWidth="1.5"/>
    </svg>
);

const Moats = () => {
    const moatsData = [
        {
            number: "01",
            title: "Emerging Businesses",
            iconComponent: <RocketIcon />,
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c4db24b3e040365d26_service-02.jpg",
            description: "Emerging businesses with turnover up to ₹1000 Cr looking to accelerate growth and establish market presence."
        },
        {
            number: "02",
            title: "MSMEs Across Sectors",
            iconComponent: <FactoryIcon />,
            img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/MSMEs Across Sectors.jpg",
            description: "MSMEs across sectors: Manufacturing, Services, Wholesale Trade, and D2C businesses seeking strategic partnerships and growth opportunities."
        },
        {
            number: "03",
            title: "Growth-Focused Promoters",
            iconComponent: <TargetIcon />,
            img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Growth-Focused Promoters.jpg",
            description: "Promoters looking to scale, modernize, or diversify their business operations with strategic guidance and investment support."
        }
    ]

    return (
        <section className="MoatsContainer">
            <div className="Container">
                <div >
                    <h2 className="white" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Whom We Serve</h2>
                    <p className="white" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">We partner with ambitious businesses and entrepreneurs who are ready to take their ventures to the next level. Our expertise spans across various sectors and business stages, providing tailored solutions for sustainable growth.</p>
                </div>
                <div className="w-100 Container paddingTop paddingBottom UpdatedMobile" style={{ display: "flex", justifyContent: "center" }}>
                    <Row gutter={[30, 30]} className="paddingTop w-100" >
                        {moatsData.map((moat, index) => (
                            <Col lg={8} md={8} sm={24} xs={24} key={index} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                <div className="moat-card">
                                    <div className="moat-card-img" >
                                        <img src={moat.img} alt="" />

                                    </div>
                                    <div className="moat-card-content">
                                        {/* <div className="card-number">
                                        {moat.number}
                                    </div> */}
                                        {moat.iconComponent}
                                        <div>
                                            <h3 className="card-title">
                                                {moat.title}
                                            </h3>
                                            <p className="card-description">
                                                {moat.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="Container">
                    <div className="QuateContainer">
                        <div className="QuateContainer-content">
                            <Row>
                                <Col lg={18} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <div>
                                        <h3 className="white">
                                            Maximize productivity by simplifying solution search
                                        </h3>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={24} xs={24} data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <div className="ButtonContainer">
                                        <button className="BtnCommonStyle addonStyles">Book&nbsp;a&nbsp;call <FaArrowRightLong /></button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Moats;