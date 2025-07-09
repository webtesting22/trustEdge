import React, { useState } from "react";
import "./FAQ.css";
import { Row, Col } from "antd";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What services or products do you offer?",
            answer: "We provide a wide range of products, from Business Loan to Supply Chain, tailored to meet every need of every MSME & Corporates. You can explore our offerings under the Products section."
        },
        {
            question: "How can I contact your support team?",
            answer: "Have questions? We're just a call away! Reach us on our helpline at +91-7069600260 or mail us on info@trustedgecapital.in feel free to visit our Mumbai office. We're always happy to help!"
        },
        {
            question: "How do NBFCs offer an edge over banks when it comes to MSME loans?",
            answer: "For MSMEs (Micro, Small, and Medium Enterprises) in India, NBFCs (Non-Banking Financial Company) stand out by offering quicker approvals, customized financing plans, simpler documentation, and more adaptable lending terms than conventional banks, making them a preferred funding partner."
        },
        {
            question: "Is collateral required for all types of loan?",
            answer: "We believe that businesses are not meant to acquire assets solely for the purpose of offering them as collateral. Capital should be channelled into growth and the creation of productive assets that drive the business forward. At the same time, we carry the responsibility of being trustees of the capital entrusted to us by our stakeholders. Our approach is to assess the true needs of a business and offer flexible solutions that strike a balance between safeguarding our investments and not hindering promising companies that may lack sufficient collateral. Our offerings are designed to align more with business requirements than rigid collateral norms."
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="FAQContainer">
            <div >
                <Row>
                    <Col span={24}>
                        <div className="faq-header">
                            <h2 className="text-center" data-aos="blur-to-clear" data-aos-delay="100" data-aos-duration="1500">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-center" data-aos="blur-to-clear" data-aos-delay="200" data-aos-duration="1500">
                                Get answers to the most common questions about our services and approach
                            </p>
                        </div>
                        
                        <div className="faq-list">
                            {faqData.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                    // data-aos="blur-to-clear" 
                                    // data-aos-delay={`${300 + index * 100}`} 
                                    // data-aos-duration="1500"
                                >
                                    <div 
                                     data-aos="blur-to-clear" 
                                     data-aos-delay={`${300 + index * 100}`} 
                                     data-aos-duration="1500"
                                        className="faq-question" 
                                        onClick={() => toggleAccordion(index)}
                                       
                                    >
                                        <h3>{item.question}</h3>
                                        <div className="faq-toggle">
                                            {activeIndex === index ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default FAQ; 