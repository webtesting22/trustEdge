import React, { useEffect } from "react";
import "./About.css";
import FAQ from "../FAQ/FAQ";
import Investors from "../Investors/Investors";
import AboutUs from "./AboutUs";
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="aboutUsContainers">
            <div style={{ width: '100%' }}>
                <div className="Container">
                    <AboutUs />

                </div>
                <div className="InvestorsContainer">
                    <div className="Container">
                        <Investors />
                    </div>
                </div>

                <div className="Container">
                    <FAQ />
                </div>
            </div>
        </section>
    )
}

export default About;