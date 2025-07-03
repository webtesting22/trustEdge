import React from "react";
import "./About.css";
import { Row, Col } from "antd";
const About = () => {
    const image = "https://assets-global.website-files.com/65fbd43381ccee5cec1b44da/65fd4af7c42184b7ab2ee553_step-01.jpg"
    return (
        <section className="AboutPaddingContainer">
            <div className="Container ">
                <div>
                    <Row>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="AboutImageContainer">
                                <img src={image} alt="" />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="paddingLeft FlexContainer">
                                <div>
                                    <h2>Our Legacy of Growth & Transformation</h2>
                                    <p>Adinath Exim Resources Ltd. was incorporated on January 20, 1995, with Registration No. 04-24300 under the Registrar of Companies, Gujarat, Dadra & Nagar Haveli. The company received its Certificate of Commencement of Business on January 25, 1995, and has been proudly listed on the Bombay Stock Exchange (BSE) since October 14, 1996.</p>
                                    <p>Originally established with the objective of operating as a merchant exporter, the company has evolved strategically over the years. Today, it actively operates in the Non-Banking Financial sector, offering a diversified and forward-looking approach to business.</p>
                                </div>
                                <div className="TagBoxesContainer">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default About;