import React, { useState } from "react";
import { Row, Col } from "antd";
import {
    IoClose,
    IoCall,
    IoMail,
    IoGlobe,
    IoCheckmarkCircle,
    IoCalendarOutline,
    IoStatsChart,
    IoBusinessOutline
} from "react-icons/io5";
import { partnersData, filterOptions } from "./PartnersData";
import "./LendingPartners.css";

const LendingPartners = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        loanAmount: '',
        purpose: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Filter partners based on active filter
    const filteredPartners = activeFilter === 'ALL'
        ? partnersData
        : partnersData.filter(partner => partner.category === activeFilter);

    // Handle filter changes
    const handleFilterChange = (filterKey) => {
        if (filterKey === 'BECOME_PARTNER') {
            setIsContactFormOpen(true);
        } else {
            setActiveFilter(filterKey);
        }
    };

    // Handle partner card click
    const handlePartnerClick = (partner) => {
        setSelectedPartner(partner);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPartner(null);
    };

    // Handle contact form close
    const handleContactFormClose = () => {
        setIsContactFormOpen(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            loanAmount: '',
            purpose: '',
            message: ''
        });
        setIsSubmitted(false);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                handleContactFormClose();
            }, 3000);

        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Get category label
    const getCategoryLabel = (category) => {
        switch (category) {
            case 'DIGITAL_LENDING_APPS':
                return 'Digital Lending';
            case 'NON_DIGITAL_LENDING_APPS':
                return 'Traditional Lending';
            case 'CO_LENDING_PARTNERSHIPS':
                return 'Co-Lending';
            default:
                return 'Partner';
        }
    };

    return (
        <section className="lending-partners-section paddingTop">
            <div className="LendingPartnersContainer">
                <div className="Container">
                    {/* Header */}
                    <div className="partners-header">
                        <h2>Our Lending Partners</h2>
                        <p>Connect with our trusted network of lending partners offering diverse financial solutions tailored to your needs.</p>
                    </div>

                    {/* Partnership Benefits Banner */}
                    <div className="partnership-benefits-banner paddingBottom">
                        <div className="benefits-content">
                            <div className="benefits-header">
                                <h3>Interest in Becoming Partners?</h3>
                                <p>Join our exclusive partner network and start earning today!</p>
                            </div>
                            <div className="commission-cards">
                                <div className="commission-card">
                                    <div className="commission-icon">
                                        <IoBusinessOutline />
                                    </div>
                                    <div className="commission-info">
                                        <h4>Business Loan Referrals</h4>
                                        <div className="commission-rate">Up to 1%</div>
                                        <p>Earn commission by referring our customized business loans to your clients!</p>
                                    </div>
                                </div>
                                <div className="commission-card">
                                    <div className="commission-icon">
                                        <IoStatsChart />
                                    </div>
                                    <div className="commission-info">
                                        <h4>NCD Investment Referrals</h4>
                                        <div className="commission-rate">Up to 1%</div>
                                        <p>Earn commission by referring investors to subscribe to our Non-Convertible Debentures (NCDs)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-cta">
                                <button
                                    className="cta-button"
                                    onClick={() => handleFilterChange('BECOME_PARTNER')}
                                >
                                    Start Earning Today - Become Our Partner
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'var(--brand--back)', width: '100%' }}>
                    <div className="Container">
                        {/* Filter Section */}
                        <div className="filter-section paddingTop">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.key}
                                    className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
                                    onClick={() => handleFilterChange(option.key)}
                                >
                                    {option.label}
                                </button>
                            ))}
                            <button
                                className="filter-btn contact-btn"
                                onClick={() => handleFilterChange('BECOME_PARTNER')}
                            >
                                Interested To Become A Partner ? Click Here
                            </button>
                        </div>

                        {/* Partners Grid */}
                        <Row gutter={[30, 30]}>
                            <Col span={24}>
                                <div className="partners-grid">
                                    {filteredPartners.map((partner) => (
                                        <div
                                            key={partner.id}
                                            className="partner-card"
                                            onClick={() => handlePartnerClick(partner)}
                                        >
                                            <div>
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="partner-logo"
                                                />

                                                <div className="partner-info">
                                                    <h4>{partner.name}</h4>
                                                    <div className="partner-category">
                                                        {getCategoryLabel(partner.category)}
                                                    </div>
                                                    {/* <p className="partner-description">
                                            {partner.shortDescription}
                                        </p> */}
                                                </div>
                                            </div>

                                            {/* <div className="partner-stats">
                                        <div className="stat-item">
                                            <div className="stat-value">{partner.processingTime}</div>
                                            <div className="stat-label">Processing Time</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">{partner.interestRate.split(' ')[0]}</div>
                                            <div className="stat-label">Interest Rate</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">{partner.activeLoans}</div>
                                            <div className="stat-label">Active Loans</div>
                                        </div>
                                    </div> */}

                                            <button className="view-more-btn">
                                                View More Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && selectedPartner && (
                    <div className="modal-overlay" onClick={handleModalClose}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleModalClose}>
                                <IoClose />
                            </button>

                            <div className="modal-header">
                                <img src={selectedPartner.logo} alt={selectedPartner.name} />
                                <h3>{selectedPartner.name}</h3>
                            </div>

                            <div className="modal-body">
                                <div className="modal-section">
                                    <h4>About</h4>
                                    <p>{selectedPartner.description}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Specialties</h4>
                                    <div className="specialties-list">
                                        {selectedPartner.specialties.map((specialty, index) => (
                                            <span key={index} className="specialty-tag">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-section">
                                    <h4>Loan Information</h4>
                                    <p><strong>Loan Range:</strong> {selectedPartner.loanRange}</p>
                                    <p><strong>Processing Time:</strong> {selectedPartner.processingTime}</p>
                                    <p><strong>Interest Rate:</strong> {selectedPartner.interestRate}</p>
                                    <p><strong>Eligibility:</strong> {selectedPartner.eligibility}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Key Features</h4>
                                    <ul className="features-list">
                                        {selectedPartner.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-section">
                                    <h4>Company Information</h4>
                                    <p><strong>Established:</strong> {selectedPartner.established}</p>
                                    <p><strong>Total Disbursed:</strong> {selectedPartner.totalDisbursed}</p>
                                    <p><strong>Active Loans:</strong> {selectedPartner.activeLoans}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Contact Information</h4>
                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <IoCall />
                                            </div>
                                            <div className="contact-details">
                                                <span>Phone</span>
                                                <a href={`tel:${selectedPartner.contactPhone}`}>
                                                    {selectedPartner.contactPhone}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <IoMail />
                                            </div>
                                            <div className="contact-details">
                                                <span>Email</span>
                                                <a href={`mailto:${selectedPartner.contactEmail}`}>
                                                    {selectedPartner.contactEmail}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <IoGlobe />
                                            </div>
                                            <div className="contact-details">
                                                <span>Website</span>
                                                <a href={selectedPartner.website} target="_blank" rel="noopener noreferrer">
                                                    {selectedPartner.website.replace('https://', '')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Form */}
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div className={`contact-form-container ${isContactFormOpen ? 'show' : ''}`}>
                        <div className="contact-form-header">
                            <h3>Become Our Partner</h3>
                            <button className="contact-form-close" onClick={handleContactFormClose}>
                                <IoClose />
                            </button>
                        </div>

                        <div className="contact-form-body">
                            {isSubmitted ? (
                                <div className="success-message">
                                    <IoCheckmarkCircle />
                                    <div>
                                        <strong>Thank you for your interest!</strong>
                                        <p>We have received your partnership request and will contact you soon.</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company Name *</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="loanAmount">Expected Loan Volume</label>
                                            <select
                                                id="loanAmount"
                                                name="loanAmount"
                                                value={formData.loanAmount}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Range</option>
                                                <option value="under-1cr">Under ₹1 Crore</option>
                                                <option value="1cr-10cr">₹1 - ₹10 Crores</option>
                                                <option value="10cr-50cr">₹10 - ₹50 Crores</option>
                                                <option value="50cr-100cr">₹50 - ₹100 Crores</option>
                                                <option value="above-100cr">Above ₹100 Crores</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="purpose">Partnership Type</label>
                                            <select
                                                id="purpose"
                                                name="purpose"
                                                value={formData.purpose}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="digital-lending">Digital Lending</option>
                                                <option value="traditional-lending">Traditional Lending</option>
                                                <option value="co-lending">Co-lending Partnership</option>
                                                <option value="technology-partner">Technology Partner</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your company and partnership expectations..."
                                            rows="4"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LendingPartners;