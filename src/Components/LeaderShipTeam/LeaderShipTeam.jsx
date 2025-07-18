import React, { useEffect } from "react";
import "./LeaderShipTeam.css";
import { Row, Col } from "antd";

const LeaderShipTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            id: 1,
            name: "Deepak Kabra",
            position: "Chief Executive Officer (CEO)",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Screenshot 2025-07-09 at 4.46.10 PM.png",
            description: "23+ Years of Experience in Banking, Advisory & Independent Directorship at listed entity with expertise in Business Development, Structured Debt & Loan Syndication.",
            expertise: ["Strategic Leadership", "Banking & Advisory", "Business Development", "Structured Debt", "Loan Syndication"]
        },
        {
            id: 2,
            name: "Somit Bhandari",
            position: "Chief Risk Officer (CRO)",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Screenshot 2025-07-09 at 4.46.24 PM.png",
            description: "Seasoned Banker with 22+ Years of Experience in Relationship, Credit & Product Management roles with banks in segments like Corporate & SME, Supply Chain Finance & Trade Finance.",
            expertise: ["Relationship Management", "Credit Management", "Product Management", "Supply Chain Finance", "Trade Finance", "Corporate Banking"]
        },
        {
            id: 3,
            name: "Abhinay Agarwal",
            position: "Business Head (BH)",
            image: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Screenshot 2025-07-09 at 4.46.34 PM.png",
            description: "Experienced Banking Professional with 15+ Years in SME, FX & Trade Sales with focus in Business Development & Team Management.",
            expertise: ["Business Development", "Team Management", "SME Banking", "FX & Trade Sales", "Sales Management"]
        }
    ];

    return (
        <section>
            <div className="Container">
                {/* Leadership Header */}
                <div className="CommonHeader paddingBottom">
                    <h2 className="text-center">Our Leadership Team</h2>
                    <p className="text-center leadership-subtitle">
                        Meet the experienced professionals driving our mission to transform
                        MSME financing in India with innovation and excellence.
                    </p>
                </div>

                {/* Team Members */}
                <div className="team-section ">
                    <Row gutter={[40, 60]} justify="center">
                        {teamMembers.map((member, index) => (
                            <Col lg={8} md={12} sm={24} xs={24} key={member.id}>
                                <div className="team-member-card">
                                    <div className="member-image-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="member-image"
                                        />
                                        {/* <div className="image-overlay">
                                            <div className="overlay-content">
                                                <h3>{member.name}</h3>
                                                <p>{member.position}</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="member-info">
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-position">{member.position}</p>
                                        <p className="member-description">{member.description}</p>

                                        {/* <div className="member-expertise">
                                            <h4>Key Expertise:</h4>
                                            <div className="expertise-tags">
                                                {member.expertise.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="expertise-tag">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Leadership Philosophy */}
                <div className="leadership-philosophy">
                    <div className="philosophy-content">
                        <h2 className="text-center">Our Leadership Philosophy</h2>
                        <p className="text-center">
                            We believe in leading by example, fostering innovation, and creating
                            sustainable value for all stakeholders. Our leadership team combines
                            deep industry expertise with a commitment to excellence and ethical practices.
                        </p>

                        <div className="philosophy-points">
                            <Row gutter={[30, 30]} justify="center">
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <div className="philosophy-item">
                                        <div className="philosophy-icon">🎯</div>
                                        <h4>Vision-Driven</h4>
                                        <p>Strategic thinking with clear focus on long-term goals</p>
                                    </div>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <div className="philosophy-item">
                                        <div className="philosophy-icon">💡</div>
                                        <h4>Innovation-Focused</h4>
                                        <p>Embracing technology and innovative solutions</p>
                                    </div>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <div className="philosophy-item">
                                        <div className="philosophy-icon">🤝</div>
                                        <h4>Collaboration</h4>
                                        <p>Building strong partnerships and teamwork</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeaderShipTeam;