import React, { useState ,useEffect} from "react";
import "./Career.css";
import { Row, Col, Modal, Form, Input, Select, Upload, Button, message } from "antd";
import { 
    TeamIcon, 
    CertificateIcon, 
    BalanceIcon, 
    LocationIcon, 
    ClockIcon, 
    ArrowRightIcon 
} from "./Icons";

const { Option } = Select;
const { TextArea } = Input;

const Career = () => {
    const [hoveredJob, setHoveredJob] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [form] = Form.useForm();

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
        setSelectedJob(null);
        form.resetFields();
    };

    const handleFormSubmit = (values) => {
        // Dummy submission for now
        console.log('Form submitted:', values);
        message.success('Application submitted successfully! We will contact you soon.');
        handleModalClose();
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                {/* <div className="jobs-section paddingTop">
                    <h2 className="text-center paddingBottom">Current Openings</h2>
                    <h1>Coming Soon</h1>
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
                                    <button 
                                        className="BtnCommonStyle"
                                        onClick={() => handleApplyClick(job)}
                                    >
                                        Apply&nbsp;Now <ArrowRightIcon size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

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

            {/* Application Modal */}
            <Modal
                title={
                    <div className="modal-header">
                        <h2>Apply for {selectedJob?.title}</h2>
                        <p>{selectedJob?.department} • {selectedJob?.location}</p>
                    </div>
                }
                open={modalVisible}
                onCancel={handleModalClose}
                footer={null}
                width={800}
                className="job-application-modal"
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFormSubmit}
                    requiredMark={false}
                >
                    <Row gutter={[16, 0]}>
                        <Col span={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[
                                    { required: true, message: 'Please enter your first name' },
                                    { min: 2, message: 'First name must be at least 2 characters' }
                                ]}
                            >
                                <Input placeholder="Enter your first name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[
                                    { required: true, message: 'Please enter your last name' },
                                    { min: 2, message: 'Last name must be at least 2 characters' }
                                ]}
                            >
                                <Input placeholder="Enter your last name" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email address' },
                            { type: 'email', message: 'Please enter a valid email address' }
                        ]}
                    >
                        <Input placeholder="Enter your email address" />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            { required: true, message: 'Please enter your phone number' },
                            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number' }
                        ]}
                    >
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>

                    <Form.Item
                        label="Total Experience"
                        name="experience"
                        rules={[{ required: true, message: 'Please select your experience level' }]}
                    >
                        <Select placeholder="Select your experience level">
                            <Option value="0-1">0-1 years</Option>
                            <Option value="1-3">1-3 years</Option>
                            <Option value="3-5">3-5 years</Option>
                            <Option value="5-7">5-7 years</Option>
                            <Option value="7-10">7-10 years</Option>
                            <Option value="10+">10+ years</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Current Location"
                        name="location"
                        rules={[{ required: true, message: 'Please enter your current location' }]}
                    >
                        <Input placeholder="Enter your current location" />
                    </Form.Item>

                    <Form.Item
                        label="Current/Last Company"
                        name="company"
                        rules={[{ required: true, message: 'Please enter your current/last company' }]}
                    >
                        <Input placeholder="Enter your current/last company" />
                    </Form.Item>

                    <Form.Item
                        label="Current CTC (Annual)"
                        name="currentCTC"
                        rules={[{ required: true, message: 'Please enter your current CTC' }]}
                    >
                        <Input placeholder="Enter your current CTC (e.g., 8 LPA)" />
                    </Form.Item>

                    <Form.Item
                        label="Expected CTC (Annual)"
                        name="expectedCTC"
                        rules={[{ required: true, message: 'Please enter your expected CTC' }]}
                    >
                        <Input placeholder="Enter your expected CTC (e.g., 12 LPA)" />
                    </Form.Item>

                    <Form.Item
                        label="Notice Period"
                        name="noticePeriod"
                        rules={[{ required: true, message: 'Please select your notice period' }]}
                    >
                        <Select placeholder="Select your notice period">
                            <Option value="immediate">Immediate</Option>
                            <Option value="15-days">15 days</Option>
                            <Option value="1-month">1 month</Option>
                            <Option value="2-months">2 months</Option>
                            <Option value="3-months">3 months</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Cover Letter"
                        name="coverLetter"
                        rules={[
                            { required: true, message: 'Please write a brief cover letter' },
                            { min: 50, message: 'Cover letter should be at least 50 characters' }
                        ]}
                    >
                        <TextArea 
                            rows={4}
                            placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                        />
                    </Form.Item>

                    <Form.Item
                        label="Resume Upload"
                        name="resume"
                        rules={[{ required: true, message: 'Please upload your resume' }]}
                    >
                        <Upload.Dragger
                            name="resume"
                            multiple={false}
                            beforeUpload={() => false}
                            accept=".pdf,.doc,.docx"
                        >
                            <p className="ant-upload-drag-icon">📄</p>
                            <p className="ant-upload-text">Click or drag file to upload</p>
                            <p className="ant-upload-hint">
                                Support for PDF, DOC, DOCX files only
                            </p>
                        </Upload.Dragger>
                    </Form.Item>

                    <Form.Item className="form-actions">
                        <div className="modal-buttons">
                            <Button onClick={handleModalClose} className="cancel-btn">
                                Cancel
                            </Button>
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                className="submit-btn"
                            >
                                Submit Application
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </section>
    );
};

export default Career;
