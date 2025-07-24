import React, { useState, useEffect } from "react";
import './HeroHome.css'
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroHome = () => {
    // Reduced keywords for better performance
    const keywords = [
        "Business Loan",
        "NBFC",
        "BSE Listed",
        "Financial Services",
        "CIBIL Score",
        "Working Capital",
        "Equipment Purchase",
        "Margin Funding"
    ];

    const sliderImages = [
        "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/01 (2).jpg",
        "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Slider2.jpg",
        "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/03 (3).jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState(new Set([0])); // Start with first image
    const [isPaused, setIsPaused] = useState(false);

    // Load images progressively (non-blocking)
    useEffect(() => {
        // Load first image immediately, others in background
        sliderImages.forEach((src, index) => {
            if (index === 0) return; // Skip first image as it's already loading
            
            const img = new Image();
            img.onload = () => {
                setLoadedImages(prev => new Set([...prev, index]));
            };
            img.src = src;
        });
    }, []);

    // Auto-advance slider only after component is mounted
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1;
                return nextIndex;
            });
        }, 3000); // Increased to 3 seconds for better UX

        return () => clearInterval(interval);
    }, [isPaused, sliderImages.length]);

    const handleImageLoad = (index) => {
        setLoadedImages(prev => new Set([...prev, index]));
    };

    return (
        <section style={{ paddingTop: '0rem' }}>
            <div className="w-100 AdjustHeightContainer">
                <Row className="w-100 h-100">
                    <Col lg={12}>
                        <div className="paddingLeft h-100 AdjustHeadingContainer">
                            <div className="AdjustGapContainer">
                                <h1 data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1000">
                                    <span className="borderSpanStyle"> Empowering</span> MSME Growth & Enabling Trust
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                    From strategic guidance to actionable insights, we're committed to propelling your business forward. Let's collaborate and achieve your goals together.
                                </p>
                                
                                <div className="InfiniteMarqueeContainer">
                                    <div className="marquee-container">
                                        <div className="marquee-content">
                                            {keywords.map((word, index) => (
                                                <span key={index} className="marquee-word">
                                                    {word}
                                                </span>
                                            ))}
                                            {keywords.map((word, index) => (
                                                <span key={`copy-${index}`} className="marquee-word">
                                                    {word}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="h-100 adjustImageStyle" data-aos="blur-to-clear" data-aos-delay="300" data-aos-duration="1000">
                            <div
                                className="image-slider-container"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {sliderImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`TrustEdge Capital Business Growth Slide ${index + 1}`}
                                        className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                                        onLoad={() => handleImageLoad(index)}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        style={{
                                            opacity: index === currentImageIndex && loadedImages.has(index) ? 1 : 
                                                   index === currentImageIndex && index === 0 ? 1 : 0
                                        }}
                                    />
                                ))}
                                
                                <div className="slider-indicators">
                                    {sliderImages.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default HeroHome;