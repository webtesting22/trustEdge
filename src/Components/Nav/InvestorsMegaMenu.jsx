import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './InvestorsMegaMenu.css';

const InvestorsMegaMenu = ({ isVisible, onMouseEnter, onMouseLeave }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpanded = (itemId) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const megaMenuData = {
        column1: [
            {
                id: 'board-committee',
                title: 'Committee of Board of Directors',
                type: 'link',
                path: '/investors/board-committee'
            },
            {
                id: 'board-meeting',
                title: 'Notice of Board Meeting',
                type: 'link',
                path: '/investors/board-meeting'
            },
            {
                id: 'annual-reports',
                title: 'Annual Reports',
                type: 'link',
                path: '/investors/annual-reports'
            },
            {
                id: 'secretarial-compliance',
                title: 'Secretarial Compliance Report',
                type: 'link',
                path: '/investors/secretarial-compliance'
            },
            {
                id: 'information-memo',
                title: 'Information Memorandum',
                type: 'link',
                path: '/investors/information-memo'
            },
            {
                id: 'investor-support',
                title: 'Investor Support',
                type: 'link',
                path: '/investors/investor-support'
            }
        ],
        column2: [
            {
                id: 'constitutional-docs',
                title: 'Constitutional Documents',
                type: 'link',
                path: '/investors/constitutional-docs'
            },
            {
                id: 'financial-results',
                title: 'Financial Results',
                type: 'accordion',
                path: '/investors/financial-results',
                subItems: [
                    { title: 'Quarterly Results', path: '/investors/quarterly-results' },
                    { title: 'Annual Results', path: '/investors/annual-results' },
                    { title: 'Interim Results', path: '/investors/interim-results' }
                ]
            },
            {
                id: 'corporate-announcements',
                title: 'Corporate Announcements',
                type: 'accordion',
                path: '/investors/corporate-announcements',
                subItems: [
                    { title: 'Press Releases', path: '/investors/press-releases' },
                    { title: 'Stock Exchange Filings', path: '/investors/stock-exchange' },
                    { title: 'Regulatory Updates', path: '/investors/regulatory-updates' }
                ]
            },
            {
                id: 'general-meeting',
                title: 'General Meeting Records',
                type: 'link',
                path: '/investors/general-meeting'
            },
            {
                id: 'download',
                title: 'Download',
                type: 'accordion',
                path: '/investors/download',
                subItems: [
                    { title: 'Annual Reports', path: '/investors/download/annual-reports' },
                    { title: 'Financial Statements', path: '/investors/download/financial-statements' },
                    { title: 'Presentations', path: '/investors/download/presentations' }
                ]
            }
        ],
        column3: [
            {
                id: 'shareholding-pattern',
                title: 'Shareholding Pattern',
                type: 'link',
                path: '/investors/shareholding-pattern'
            },
            {
                id: 'credit-rating',
                title: 'Credit Rating',
                type: 'link',
                path: '/investors/credit-rating'
            },
            {
                id: 'policies-statutory',
                title: 'Policies and Statutory Data',
                type: 'link',
                path: '/investors/policies-statutory'
            },
            {
                id: 'dividend',
                title: 'Dividend',
                type: 'accordion',
                path: '/investors/dividend',
                subItems: [
                    { title: 'Dividend History', path: '/investors/dividend/history' },
                    { title: 'Dividend Policy', path: '/investors/dividend/policy' },
                    { title: 'Dividend Calendar', path: '/investors/dividend/calendar' }
                ]
            },
            {
                id: 'secretarial-audit',
                title: 'Secretarial Audit Report',
                type: 'link',
                path: '/investors/secretarial-audit'
            }
        ]
    };

    const renderMenuItem = (item) => {
        if (item.type === 'link') {
            return (
                <div key={item.id} className="mega-menu-item">
                    <Link to={item.path} className="mega-menu-link">
                        {item.title}
                    </Link>
                </div>
            );
        }

        if (item.type === 'accordion') {
            const isExpanded = expandedItems[item.id];
            return (
                <div key={item.id} className="mega-menu-item accordion-item">
                    <div
                        className="mega-menu-link accordion-header"
                        onClick={() => toggleExpanded(item.id)}
                    >
                        {item.title}
                        {isExpanded ? (
                            <FaChevronUp className="accordion-icon" />
                        ) : (
                            <FaChevronDown className="accordion-icon" />
                        )}
                    </div>
                    {isExpanded && (
                        <div className="accordion-content">
                            {item.subItems.map((subItem, index) => (
                                <Link
                                    key={index}
                                    to={subItem.path}
                                    className="mega-menu-sublink"
                                >
                                    {subItem.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            );
        }
    };

    return (
        <div
            className={`investors-mega-menu ${isVisible ? 'visible' : 'hidden'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="mega-menu-container">
                <div className="mega-menu-content">
                    <div className="mega-menu-column">
                        <h3 className="mega-menu-title">Corporate Governance</h3>
                        {megaMenuData.column1.map(renderMenuItem)}
                    </div>

                    <div className="mega-menu-column">
                        <h3 className="mega-menu-title">Financial Information</h3>
                        {megaMenuData.column2.map(renderMenuItem)}
                    </div>

                    <div className="mega-menu-column">
                        <h3 className="mega-menu-title">Investor Services</h3>
                        {megaMenuData.column3.map(renderMenuItem)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorsMegaMenu; 