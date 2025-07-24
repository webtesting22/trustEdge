import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import { Row, Col } from "antd";

const About = () => {
    const image = "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Enabling Growth for India’s Next-Gen Enterprises.webp"
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
                        <Col lg={10} md={12} sm={24} xs={24}>
                            <div

                                className="AboutImageContainer"
                                data-aos="blur-to-clear"
                                data-aos-delay="100"
                                data-aos-duration="1500"
                                style={{

                                    overflow: "hidden"
                                }}
                            >
                                <img src={image} alt="About TrustEdge Capital - Enabling Growth for India’s Next-Gen Enterprises" ref={imageRef} style={{
                                    transform: `translateY(${parallax}px)`,
                                    transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                                    willChange: "transform",
                                }} />
                            </div>
                        </Col>
                        <Col lg={14} md={12} sm={24} xs={24}>
                            <div className="paddingLeft FlexContainer">
                                <div>
                                    {/* <span className="sectionKeywordDesign">About Us</span> */}
                                    <h2 data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Enabling Growth for India’s Next-Gen Enterprises</h2>
                                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">TrustEdge Capital Limited is a new-age financial services company dedicated to addressing the evolving credit and capital needs of India’s Small and Medium Enterprises (SMEs). In a rapidly shifting economic landscape, SMEs require more than traditional financing—they need partners who understand their unique challenges and can respond with speed and precision. At TrustEdge Capital, we bridge the funding gap through deep industry expertise, risk-smart underwriting, and a delivery model designed for agility and responsiveness.</p>
                                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Our mission is simple yet powerful: to empower India’s SME ecosystem to scale with confidence. We do this by providing financial solutions that are not only timely and tailored but also rooted in trust and long-term partnership. Whether it’s working capital, growth capital, or structured debt, we offer solutions that align with the specific needs and ambitions of our clients.</p>
                                    <p data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">Behind our mission is a leadership team with over 100 years of collective experience across lending, credit risk, and SME finance. This rare combination of institutional-grade discipline and entrepreneurial flexibility ensures we bring the best of both worlds—sound financial governance and an ability to act swiftly, empowering businesses to thrive in today's competitive marketplace.</p>
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