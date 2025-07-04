import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import { Row, Col } from "antd";

const About = () => {
    const image = "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Growth & Transformation.jpg"
    const imageRef = useRef(null);
    const [parallax, setParallax] = useState(0);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (imageRef.current) observer.observe(imageRef.current);
        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        const handleScroll = () => {
            if (!imageRef.current) return;
            const rect = imageRef.current.getBoundingClientRect();
            // The further from the center of the viewport, the more translate
            const windowHeight = window.innerHeight;
            const offset = (rect.top - windowHeight / 2) / 8; // more subtle parallax
            setParallax(offset);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [inView]);

    return (
        <section className="AboutPaddingContainer">
            <div className="Container">
                <div>
                    <Row>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div

                                className="AboutImageContainer"
                                data-aos="blur-to-clear"
                                data-aos-delay="100"
                                data-aos-duration="1500"
                                style={{

                                    overflow: "hidden"
                                }}
                            >
                                <img src={image} alt="" ref={imageRef} style={{
                                    transform: `translateY(${parallax}px)`,
                                    transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                                    willChange: "transform",
                                }} />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <div className="paddingLeft FlexContainer">
                                <div>
                                    {/* <span className="sectionKeywordDesign">About Us</span> */}
                                    <h2 data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Our Legacy of Growth & Transformation</h2>
                                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500"><b>Adinath Exim Resources Ltd.</b> was incorporated on January 20, 1995, with Registration No. 04-24300 under the Registrar of Companies, Gujarat, Dadra & Nagar Haveli. The company received its Certificate of Commencement of Business on January 25, 1995, and has been proudly listed on the Bombay Stock Exchange (BSE) since October 14, 1996.</p>
                                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Originally established with the objective of operating as a merchant exporter, the company has evolved strategically over the years. Today, it actively operates in the Non-Banking Financial sector, offering a diversified and forward-looking approach to business.</p>
                                </div>
                                <div className="TagBoxesContainer" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">

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