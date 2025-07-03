import React from "react";
import './HeroHome.css'
import { Row, Col } from "antd";
const HeroHome = () => {
    const keywords = [
        "Merchant Exporter",
        "NBFC",
        "BSE Listed",
        "Financial Services",
        "Incorporated 1995",
        "Adinath Exim",
        "Non-Banking",
        "Gujarat Company",
        "Certificate of Commencement",
        "Strategic Expansion"
    ];
    const Image = "https://assets-global.website-files.com/65fbd43381ccee5cec1b44da/660fa1c623b47130d92450b6_home-01.jpg"
    return (
        <section>
            <div className="w-100 AdjustHeightContainer">
                <Row className="w-100 h-100">
                    <Col lg={12}>
                        <div className=" paddingLeft h-100 AdjustHeadingContainer">
                            <div className="AdjustGapContainer">
                                <h1>
                                    Innovative consulting for sustainable <br /> growth
                                </h1>
                                <p>From strategic guidance to actionable insights, we're committed to propelling your business forward. Let's collaborate and achieve your goals together.</p>
                                <div>
                                    <button>Book a call</button>
                                </div>
                                <div className="InfiniteMarqueeContainer">
                                    <div className="marquee-container">
                                        <div className="marquee-content">
                                            {keywords.map((word, index) => (
                                                <span key={index} className="marquee-word">
                                                    {word}.
                                                </span>
                                            ))}
                                            {keywords.map((word, index) => (
                                                <span key={`copy-${index}`} className="marquee-word">
                                                    {word}.
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="h-100 adjustImageStyle">
                            <img src={Image} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default HeroHome;