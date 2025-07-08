import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const RouteWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Reset loading state when route changes
        setIsLoading(true);
    }, [children]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
                {children}
            </div>
        </>
    );
};

export default RouteWrapper; 