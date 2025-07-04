import React from "react";
import "./Moats.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
const Moats = () => {
    const moatsData = [
        {
            number: "01",
            title: "Smart Entry",
            icon: "/Images/Icons/smart.png",
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c4db24b3e040365d26_service-02.jpg",
            description: "We begin with deep market research and data-driven insights to ensure every investment or partnership starts on a strong foundation. maximize potential."
        },
        {
            number: "02",
            title: "Sharp Monitoring",
            icon: "/Images/Icons/monitor-screen.png",
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c31f010ba8054f27fd_service-03.jpg",
            description: "Throughout the journey, we maintain rigorous oversight using advanced tools and regular performance evaluations."
        },
        {
            number: "03",
            title: "Strategic Exit",
            icon: "/Images/Icons/strategic.png",
            img: "https://cdn.prod.website-files.com/65fbd43381ccee5cec1b44da/65fd32c37226fc29aa310fdd_service-01.jpg",
            description: "We don't just plan how to enter — we plan how to exit. Our exit strategies are carefully crafted to align with market conditions and value maximization."
        }
    ]

    return (
        <section className="MoatsContainer">
            <div className="Container">
                <div >
                    <h2 className="white"  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Our Moat: A Shield of Sustainable Advantage</h2>
                    <p className="white"  data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">A "moat" represents a company’s enduring competitive edge — much like the protective moat surrounding a castle. It safeguards the business from competitors by building barriers through innovation, efficiency, customer trust, or unique offerings that are hard to replicate.</p>
                </div>
                <div className="w-100 Container paddingTop paddingBottom">
                    <Row gutter={[30, 30]} className="paddingTop">
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