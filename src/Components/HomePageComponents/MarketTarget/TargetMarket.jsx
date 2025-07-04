import React, { useState } from "react";
import { Row, Col } from "antd";
import "./TargetMarket.css";

const steps = [
  {
    number: "01",
    title: "Consultation and assessment",
    content:
      "Through comprehensive assessments and discussions, we gain insights into your specific needs and objectives, laying the foundation for our collaboration.",
  },
  {
    number: "02",
    title: "Customized solutions",
    content:
      "We design and propose solutions tailored to your business goals, ensuring maximum impact and value.",
  },
  {
    number: "03",
    title: "Implementation and support",
    content:
      "We assist with seamless implementation and provide ongoing support to ensure lasting success.",
  },
];

const TargetMarket = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section>
      <div className="Container">
        <Row gutter={[32, 32]} align="middle">
          <Col lg={14} md={24} sm={24} xs={24}>
            <div className="target-market-accordion">
              <h2>Streamlining your journey to success</h2>
              <p>
                Our process is designed to make consulting services accessible, effective, and tailored to your unique needs.
              </p>
              <div className="custom-step-accordion">
                {steps.map((step, idx) => (
                  <div
                    className={`step-panel${openIndex === idx ? " open" : ""}`}
                    key={step.number}
                    onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                  >
                    <div className="step-panel-header">
                      <span className="step-number">{step.number}</span>
                      <span className="step-title">{step.title}</span>
                      <span className={`step-arrow${openIndex === idx ? " open" : ""}`}>⌃</span>
                    </div>
                    <div
                      className="step-panel-content"
                      style={{
                        maxHeight: openIndex === idx ? 200 : 0,
                        opacity: openIndex === idx ? 1 : 0,
                        padding: openIndex === idx ? "16px 0 0 0" : "0 0 0 0",
                        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <div>{step.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24}>
            <div className="target-market-image-container">
              <img
                src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/sachin-01.png"
                alt="Target Market"
                className="target-market-image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TargetMarket;
