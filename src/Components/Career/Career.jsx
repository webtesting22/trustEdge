import React, { useState } from "react";
import "./Career.css";
import { Row, Col } from "antd";
import { 
    TeamIcon, 
    CertificateIcon, 
    BalanceIcon, 
    LocationIcon, 
    ClockIcon, 
    ArrowRightIcon 
} from "./Icons";

const Career = () => {
    const [hoveredJob, setHoveredJob] = useState(null);

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Financial Analyst",
            department: "Finance",
            location: "Mumbai, India",
            type: "Full-time",
            experience: "3-5 years",
            description: "Lead financial analysis and strategic planning for MSME lending operations.",
            requirements: ["Financial modeling", "Risk assessment", "Excel proficiency", "NBFC experience"]
        },
        {
            id: 2,
            title: "Credit Risk Manager",
            department: "Risk Management",
            location: "Pune, India",
            type: "Full-time",
            experience: "5-7 years",
            description: "Develop and implement credit risk frameworks for business lending.",
            requirements: ["Credit analysis", "Risk modeling", "Regulatory compliance", "Team leadership"]
        },
        {
            id: 3,
            title: "Business Development Executive",
            department: "Sales",
            location: "Delhi, India",
            type: "Full-time",
            experience: "2-4 years",
            description: "Drive business growth through client acquisition and relationship management.",
            requirements: ["B2B sales", "Client management", "Communication skills", "Target achievement"]
        },
        {
            id: 4,
            title: "Software Engineer",
            department: "Technology",
            location: "Bangalore, India",
            type: "Full-time",
            experience: "1-3 years",
            description: "Develop and maintain fintech applications and lending platforms.",
            requirements: ["React.js", "Node.js", "Database management", "API development"]
        }
    ];

    const benefits = [
        {
            icon: <TeamIcon size={24} />,
            title: "Team Collaboration",
            description: "Work with talented professionals in a collaborative environment"
        },
        {
            icon: <CertificateIcon size={24} />,
            title: "Learning & Growth",
            description: "Continuous learning opportunities and career advancement"
        },
        {
            icon: <BalanceIcon size={24} />,
            title: "Work-Life Balance",
            description: "Flexible working hours and comprehensive benefits"
        }
    ];

    return (
        <section className="paddingTop">
            <div className="Container">
                {/* Career Header */}
                <div className="career-header">
                    <h1 className="text-center">Join Our Team</h1>
                    <p className="text-center career-subtitle">
                        Build your career with India's leading NBFC. We're looking for passionate individuals 
                        who want to make a difference in the MSME financing sector.
                    </p>
                </div>

                {/* Why Join Us Section */}
                <div className="why-join-section">
                    <h2 className="text-center paddingBottom">Why Work With Us?</h2>
                    <Row gutter={[30, 30]} justify="center">
                        {benefits.map((benefit, index) => (
                            <Col lg={8} md={8} sm={24} xs={24} key={index}>
                                <div className="benefit-card">
                                    <div className="benefit-icon">
                                        {benefit.icon}
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Job Openings Section */}
                <div className="jobs-section paddingTop">
                    <h2 className="text-center paddingBottom">Current Openings</h2>
                    <div className="jobs-container">
                        {jobOpenings.map((job) => (
                            <div 
                                key={job.id}
                                className={`job-card ${hoveredJob === job.id ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredJob(job.id)}
                                onMouseLeave={() => setHoveredJob(null)}
                            >
                                <div className="job-header">
                                    <div className="job-title-section">
                                        <h3>{job.title}</h3>
                                        <span className="job-department">{job.department}</span>
                                    </div>
                                    <div className="job-meta">
                                        <span className="job-type">{job.type}</span>
                                    </div>
                                </div>
                                
                                <div className="job-details">
                                    <div className="job-info">
                                        <div className="info-item">
                                            <LocationIcon size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="info-item">
                                            <ClockIcon size={16} />
                                            <span>{job.experience}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="job-description">{job.description}</p>
                                    
                                    <div className="job-requirements">
                                        <h4>Key Requirements:</h4>
                                        <ul>
                                            {job.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="job-actions">
                                    <button className="BtnCommonStyle">
                                        Apply&nbsp;Now <ArrowRightIcon size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                {/* <div className="career-cta">
                    <div className="cta-content">
                        <h2>Don't See Your Role?</h2>
                        <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
                        <button className="BtnCommonStyle cta-btn">
                            Send Resume <ArrowRightIcon size={16} />
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Career;
