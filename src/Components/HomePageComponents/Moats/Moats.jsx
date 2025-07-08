import React from "react";
import "./Moats.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
const Moats = () => {
    const moatsData = [
        {
            number: "01",
            title: "Emerging Businesses",
            icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/15 (1).png",
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c4db24b3e040365d26_service-02.jpg",
            description: "Emerging businesses with turnover up to ₹1000 Cr looking to accelerate growth and establish market presence."
        },
        {
            number: "02",
            title: "MSMEs Across Sectors",
            icon: "/Images/Icons/monitor-screen.png",
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c31f010ba8054f27fd_service-03.jpg",
            description: "MSMEs across sectors: Manufacturing, Services, Wholesale Trade, and D2C businesses seeking strategic partnerships and growth opportunities."
        },
        {
            number: "03",
            title: "Growth-Focused Promoters",
            icon: "/Images/Icons/strategic.png",
            img: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Strategic Exit.jpg",
            description: "Promoters looking to scale, modernize, or diversify their business operations with strategic guidance and investment support."
        }
    ]

    return (
        <section className="MoatsContainer">
            <div className="Container">
                <div >
                    <h2 className="white"  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Whom We Serve</h2>
                    <p className="white"  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">We partner with ambitious businesses and entrepreneurs who are ready to take their ventures to the next level. Our expertise spans across various sectors and business stages, providing tailored solutions for sustainable growth.</p>
                </div>
                <div className="w-100 Container paddingTop paddingBottom UpdatedMobile" style={{display:"flex",justifyContent:"center"}}>
                    <Row gutter={[30, 30]} className="paddingTop w-100" >
                        {moatsData.map((moat, index) => (
                            <Col lg={8} md={8} sm={24} xs={24} key={index}  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                <div className="moat-card">
                                    <div className="moat-card-img" >
                                        <img src={moat.img} alt="" />

                                    </div>
                                    <div className="moat-card-content">
                                        {/* <div className="card-number">
                                        {moat.number}
                                    </div> */}
                                        <img src={moat.icon} alt="" />
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
                                <Col lg={18} md={12} sm={24} xs={24}  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    <div>
                                        <h3 className="white">
                                            Maximize productivity by simplifying solution search
                                        </h3>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={24} xs={24}  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
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