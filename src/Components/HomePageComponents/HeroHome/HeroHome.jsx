import React, { useState, useEffect } from "react";
import './HeroHome.css'
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroHome = () => {
    const keywords = [
        "Business Loan",
        "NBFC",
        "BSE Listed",
        "Financial Services",
        "Incorporated 1995",
        "Adinath Exim",
        "Non-Banking",
        "Gujarat Company",
        "Certificate of Commencement",
        "Strategic Expansion",
        "CIBIL Score",
        "CRIF Score",
        "Score Card Rating Model",
        "Fintech Lending",
        "Credit Scoring",
        "Short Term Funding",
        "Working Capital",
        "Equipment Purchase Loan",
        "Margin Funding",
        "Banking Limits"
    ];

    const sliderImages = [
        "https://assets-global.website-files.com/65fbd43381ccee5cec1b44da/660fa1c623b47130d92450b6_home-01.jpg",
        "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Slider2.jpg",
        "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/slider3.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Preload all images for smooth transitions
    useEffect(() => {
        const imagePromises = sliderImages.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        });

        Promise.all(imagePromises)
            .then(() => setImagesLoaded(true))
            .catch(console.error);
    }, [sliderImages]);

    useEffect(() => {
        if (!imagesLoaded || isPaused) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [sliderImages.length, imagesLoaded, isPaused]);
    return (
        <section>
            <div className="w-100 AdjustHeightContainer">
                <Row className="w-100 h-100">
                    <Col lg={12}>
                        <div className="paddingLeft h-100 AdjustHeadingContainer">
                            <div className="AdjustGapContainer">
                                <h1 data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                    Innovative consulting for <span className="borderSpanStyle">sustainable</span> <br /> growth
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">From strategic guidance to actionable insights, we're committed to propelling your business forward. Let's collaborate and achieve your goals together.</p>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
                                    <button className="BtnCommonStyle">Book&nbsp;a&nbsp;call <FaArrowRightLong /></button>
                                </div>
                                <div className="InfiniteMarqueeContainer" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
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
                        <div className="h-100 adjustImageStyle" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                            <div
                                className="image-slider-container"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {!imagesLoaded && (
                                    <div className="slider-loading">
                                        <div className="loading-spinner"></div>
                                    </div>
                                )}
                                {sliderImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className={`slider-image ${index === currentImageIndex ? 'active' : ''} ${imagesLoaded ? 'loaded' : ''}`}
                                        loading="eager"
                                    />
                                ))}
                                {imagesLoaded && (
                                    <div className="slider-indicators">
                                        {sliderImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default HeroHome;