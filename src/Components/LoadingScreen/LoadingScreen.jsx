import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
    const [stage, setStage] = useState("loading"); // loading -> fadeOut -> slideOut -> complete

    useEffect(() => {
        // Show loading image for 1.5 seconds
        const timer1 = setTimeout(() => {
            setStage("fadeOut");
        }, 1500);

        // Start slide animation after fade completes (1.5s + 2s = 3.5s)
        const timer2 = setTimeout(() => {
            setStage("slideOut");
        }, 3500);

        // Complete loading after slide animation (3.5s + 0.8s = 4.3s)
        const timer3 = setTimeout(() => {
            setStage("complete");
            onComplete && onComplete();
        }, 4300);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    if (stage === "complete") {
        return null;
    }

    return (
        <div className="loading-screen">
            <div className={`loading-half loading-top ${stage === "slideOut" ? "slide-up" : ""}`}></div>
            <div className={`loading-half loading-bottom ${stage === "slideOut" ? "slide-down" : ""}`}></div>

            {/* Single centered image container */}
            <div className={`loading-image-container  ${stage !== "loading" ? "fade-out" : ""}`}>
                <div className="IconsContainer">
                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/UpdatedBrandIcons.png" alt="TrustEdge Capital Loading Screen Brand Icons" />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 