import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { FaArrowRightLong, FaPlus, FaMinus } from "react-icons/fa6";
import ProductsCardsData from "../HomePageComponents/Products/ProductData";

const SeparateProduct = () => {
    const [expandedCards, setExpandedCards] = useState({});
    const [visibleCards, setVisibleCards] = useState({});

    useEffect(() => {
        // Animate cards on mount
        const timer = setTimeout(() => {
            ProductsCardsData.forEach((section, sectionIndex) => {
                section.services.forEach((service, serviceIndex) => {
                    setTimeout(() => {
                        setVisibleCards(prev => ({
                            ...prev,
                            [`${sectionIndex}-${serviceIndex}`]: true
                        }));
                    }, (sectionIndex * 200) + (serviceIndex * 100));
                });
            });
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const toggleCard = (cardId) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    // Enhanced SVG Icons with animations
    const IconComponents = {
        briefcase: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
                <defs>
                    <linearGradient id="briefcaseBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.1"/>
                    </linearGradient>
                </defs>
                <rect x="5" y="5" width="50" height="50" rx="12" fill="url(#briefcaseBg)" stroke="rgba(255,101,24,0.4)" strokeWidth="1"/>
                <rect x="15" y="22" width="30" height="20" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <path d="M22 22V18C22 16.8954 22.8954 16 24 16H36C37.1046 16 38 16.8954 38 18V22" stroke="white" strokeWidth="2" fill="none" />
                <line x1="15" y1="30" x2="45" y2="30" stroke="white" strokeWidth="2" />
                <circle cx="30" cy="34" r="2" fill="#FF6518" />
            </svg>
        ),
        chart: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
                <defs>
                    <linearGradient id="chartBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.1"/>
                    </linearGradient>
                </defs>
                <rect x="5" y="5" width="50" height="50" rx="12" fill="url(#chartBg)" stroke="rgba(255,101,24,0.4)" strokeWidth="1"/>
                <rect x="15" y="15" width="30" height="30" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <path d="M22 35L28 29L34 33L42 25" stroke="white" strokeWidth="2" fill="none" className="chart-line" />
                <circle cx="22" cy="35" r="2" fill="#FF6518" className="chart-point" />
                <circle cx="28" cy="29" r="2" fill="#FF6518" className="chart-point" />
                <circle cx="34" cy="33" r="2" fill="#FF6518" className="chart-point" />
                <circle cx="42" cy="25" r="2" fill="#FF6518" className="chart-point" />
            </svg>
        ),
        calculator: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
                <defs>
                    <linearGradient id="calculatorBg" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6518" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#FF6518" stopOpacity="0.1"/>
                    </linearGradient>
                </defs>
                <rect x="5" y="5" width="50" height="50" rx="12" fill="url(#calculatorBg)" stroke="rgba(255,101,24,0.4)" strokeWidth="1"/>
                <rect x="18" y="12" width="24" height="36" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <rect x="22" y="16" width="16" height="6" rx="1" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="24" cy="28" r="2" fill="white" />
                <circle cx="30" cy="28" r="2" fill="white" />
                <circle cx="36" cy="28" r="2" fill="white" />
                <circle cx="24" cy="34" r="2" fill="white" />
                <circle cx="30" cy="34" r="2" fill="white" />
                <circle cx="36" cy="34" r="2" fill="white" />
                <circle cx="24" cy="40" r="2" fill="#FF6518" />
                <circle cx="30" cy="40" r="2" fill="#FF6518" />
                <circle cx="36" cy="40" r="2" fill="#FF6518" />
            </svg>
        )
    };

    const extractListItems = (description) => {
        const ulMatch = description.props.children[0].props.children;
        return ulMatch.filter(item => item.type === 'li').map((item, index) => ({
            id: index,
            text: item.props.children
        }));
    };

    return (
        <section className="paddingTop">
            <div className="container">
                <div className="separate-product-header">
                    <h1 className="animated-title">Financial Solutions Portfolio</h1>
                    <p className="animated-subtitle">
                        Discover our comprehensive range of financial products designed to accelerate your business growth
                    </p>
                </div>

                <div className="animated-products-container">
                    {ProductsCardsData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="product-category-section">
                            <div className="category-header">
                                <div className="category-badge">{section.sectionNumber}</div>
                                <div className="category-info">
                                    <h2 className="category-title">{section.sectionTitle}</h2>
                                    <span className="category-subtitle">{section.backgroundText}</span>
                                </div>
                            </div>

                            <Row gutter={[30, 30]} justify="center">
                                {section.services.map((service, serviceIndex) => {
                                    const cardId = `${sectionIndex}-${serviceIndex}`;
                                    const isExpanded = expandedCards[cardId];
                                    const isVisible = visibleCards[cardId];
                                    const listItems = extractListItems(service.description);

                                    return (
                                        <Col lg={12} md={12} sm={24} xs={24} key={serviceIndex}>
                                            <div className={`animated-product-card ${isVisible ? 'visible' : ''}`}>
                                                <div className="card-header">
                                                    <div className="icon-wrapper">
                                                        {IconComponents[service.icon]}
                                                    </div>
                                                    <h3 className="card-title">{service.title}</h3>
                                                </div>

                                                <div className="card-content">
                                                    <div className="feature-points">
                                                        {listItems.slice(0, isExpanded ? listItems.length : 2).map((item, index) => (
                                                            <div 
                                                                key={item.id} 
                                                                className={`feature-point ${isExpanded ? 'expanded' : ''}`}
                                                                style={{
                                                                    animationDelay: `${index * 100}ms`
                                                                }}
                                                            >
                                                                <div className="point-marker"></div>
                                                                <p className="point-text">{item.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {listItems.length > 2 && (
                                                        <button 
                                                            className="expand-button"
                                                            onClick={() => toggleCard(cardId)}
                                                        >
                                                            {isExpanded ? (
                                                                <>
                                                                    <FaMinus /> Show Less
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <FaPlus /> Show More ({listItems.length - 2} more)
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>

                                                <div className="card-footer">
                                                    <button className="action-button">
                                                        Learn More <FaArrowRightLong />
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    ))}
                </div>

                {/* Final CTA Section */}
                <div className="final-cta-section">
                    <div className="cta-wrapper">
                        <div className="cta-content">
                            <h2>Ready to Transform Your Business?</h2>
                            <p>Choose the perfect financial solution for your business needs and start your growth journey today.</p>
                            <div className="cta-buttons">
                                <button className="primary-cta">
                                    Get Started <FaArrowRightLong />
                                </button>
                                <button className="secondary-cta">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .separate-product-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .animated-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    opacity: 0;
                    animation: fadeInUp 0.8s ease-out 0.2s forwards;
                }

                .animated-subtitle {
                    font-size: 1.2rem;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                    opacity: 0;
                    animation: fadeInUp 0.8s ease-out 0.4s forwards;
                }

                .product-category-section {
                    margin-bottom: 80px;
                }

                .category-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;
                    padding: 20px 0;
                }

                .category-badge {
                    background: linear-gradient(135deg, #FF6518, #FF8A50);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    margin-right: 20px;
                    min-width: 60px;
                    text-align: center;
                }

                .category-info {
                    flex: 1;
                }

                .category-title {
                    font-size: 2.2rem;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin: 0 0 8px 0;
                }

                .category-subtitle {
                    color: #FF6518;
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                .animated-product-card {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    border: 1px solid rgba(255,101,24,0.1);
                    transition: all 0.4s ease;
                    opacity: 0;
                    transform: translateY(30px);
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                }

                .animated-product-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .animated-product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(255,101,24,0.15);
                }

                .card-header {
                    text-align: center;
                    margin-bottom: 25px;
                }

                .icon-wrapper {
                    margin-bottom: 15px;
                }

                .animated-icon {
                    transition: transform 0.3s ease;
                }

                .animated-product-card:hover .animated-icon {
                    transform: scale(1.1);
                }

                .chart-line {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: drawLine 2s ease-in-out infinite;
                }

                .chart-point {
                    animation: pulse 2s ease-in-out infinite;
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin: 0;
                }

                .card-content {
                    flex: 1;
                    margin-bottom: 20px;
                }

                .feature-points {
                    margin-bottom: 20px;
                }

                .feature-point {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 15px;
                    opacity: 0;
                    animation: slideInLeft 0.5s ease-out forwards;
                }

                .feature-point.expanded {
                    animation: slideInLeft 0.5s ease-out forwards;
                }

                .point-marker {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #FF6518, #FF8A50);
                    margin-right: 12px;
                    margin-top: 8px;
                    flex-shrink: 0;
                }

                .point-text {
                    color: #555;
                    line-height: 1.6;
                    margin: 0;
                }

                .expand-button {
                    background: rgba(255,101,24,0.1);
                    border: 1px solid rgba(255,101,24,0.3);
                    color: #FF6518;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                .expand-button:hover {
                    background: rgba(255,101,24,0.2);
                    transform: translateY(-2px);
                }

                .card-footer {
                    text-align: center;
                    margin-top: auto;
                }

                .action-button {
                    background: linear-gradient(135deg, #FF6518, #FF8A50);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }

                .action-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255,101,24,0.3);
                }

                .final-cta-section {
                    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
                    border-radius: 30px;
                    padding: 60px 40px;
                    margin-top: 80px;
                    text-align: center;
                }

                .cta-content h2 {
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    font-weight: 700;
                }

                .cta-content p {
                    color: #ccc;
                    font-size: 1.2rem;
                    margin-bottom: 40px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .cta-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .primary-cta {
                    background: linear-gradient(135deg, #FF6518, #FF8A50);
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    border-radius: 30px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }

                .secondary-cta {
                    background: transparent;
                    color: white;
                    border: 2px solid white;
                    padding: 15px 40px;
                    border-radius: 30px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .primary-cta:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(255,101,24,0.4);
                }

                .secondary-cta:hover {
                    background: white;
                    color: #1a1a1a;
                    transform: translateY(-3px);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes drawLine {
                    0% {
                        stroke-dashoffset: 100;
                    }
                    50% {
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dashoffset: -100;
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.1);
                    }
                }

                @media (max-width: 768px) {
                    .animated-title {
                        font-size: 2rem;
                    }
                    
                    .category-title {
                        font-size: 1.8rem;
                    }
                    
                    .category-header {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .category-badge {
                        margin-bottom: 15px;
                        margin-right: 0;
                    }
                    
                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .primary-cta, .secondary-cta {
                        width: 100%;
                        max-width: 300px;
                    }
                }
            `}</style>
        </section>
    );
};

export default SeparateProduct;