import React, { useEffect, useState } from "react";
import "./Action.css";
import { FaArrowUp } from "react-icons/fa";

const Action = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`action-fab-container${visible ? ' show' : ''}`}> 
            <button
                className="fab-main"
                onClick={handleScrollTop}
                aria-label="Scroll to top"
                style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.3s' }}
            >
                <span className="fab-pulse" />
                <FaArrowUp />
            </button>
        </div>
    );
};

export default Action;