import React, { useState, useEffect } from "react";
import "./StickyImage.css";

const StickyImage = () => {
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const headings = [
        "Empowerment through insight, achievement through action",
        "Transforming visions into sustainable success stories",
        "Building tomorrow's financial foundations today",
        "Innovative solutions for lasting growth",
        "Partnering in your journey to excellence",
        "Creating value through strategic financing"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false); // Start fade out
            
            setTimeout(() => {
                setCurrentHeadingIndex((prevIndex) => 
                    prevIndex === headings.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true); // Start fade in
            }, 500); // Wait for fade out to complete
            
        }, 2000); // Change every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="StickyImageContainer">
            <div className="Container" style={{width: "100%"}}>
                <div>
                    <div className="heading-container">
                        <h2 
                            style={{ 
                                color: "white",
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out'
                            }} 
                            data-aos="blur-to-clear" 
                            data-aos-delay="100" 
                            data-aos-duration="1500"
                        >
                            {headings[currentHeadingIndex].split('<br />').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < headings[currentHeadingIndex].split('<br />').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h2>
                    </div>
                    <br />
                    {/* <button>Get A Demo</button> */}
                </div>
            </div>
        </section>
    );
};

export default StickyImage;