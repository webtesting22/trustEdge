import React, { useState } from "react";
import { Row, Col } from "antd";
import "./TargetMarket.css";

const steps = [
  {
    number: "01",
    title: "Exclusively SME-Focused",
    content:
      "We understand the unique business cycles, capital constraints, and ambitions of SMEs.",
  },
  {
    number: "02",
    title: "Flexible Structures",
    content:
      "Loan offerings customized around cash flow patterns and business models.",
  },
  {
    number: "03",
    title: "Quick Turnarounds",
    content:
      "Digitally enabled processes for faster assessment and disbursal.",
  },
  {
    number: "04",
    title: "Risk-Aligned Lending",
    content:
      "Proprietary credit scoring and in-depth due diligence for responsible credit deployment.",
  },
  {
    number: "05",
    title: "Relationship-Centric Approach",
    content:
      "Long-term partnerships, not just transactions.",
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
              <h2>The TrustEdge Advantage</h2>
              <p>
                Purpose-Built for MSMEs. Powered by Expertise. Driven by Trust.
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
                alt="Target Market for TrustEdge Capital - MSME and Business Financing"
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
