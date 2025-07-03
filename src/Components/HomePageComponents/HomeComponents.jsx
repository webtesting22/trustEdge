import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import CompanyMission from "./CompanyMission/CompanyMission";
import About from "./About/About";
import Moats from "./Moats/Moats";
import StickyImage from "./StickyImage/StickyImage";
const HomeComponents = () => {
    return (
        <div>
            <HeroHome />
            <CompanyMission />
            <Moats />
            <About />
            <StickyImage />
        </div>
    )
}

export default HomeComponents;