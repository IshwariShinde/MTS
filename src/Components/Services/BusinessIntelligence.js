import React from 'react'
import '../../CSS/businessintelligence.css'
import BiBenefitComponent from './BiBenefitComponent'
import BiInsightsComponent from './BiInsightsComponent'
import BiservicesComponent from './BiservicesComponent'

const BusinessIntelligence = () => {
    return (
        <div className='businessIntelligence'>
            <div className='bi_top'>
                <div className='bi_heading_container '>
                    <p className='bi_heading animate__animated  animate__fadeInUp'>Business Intelligence</p>
                    <p className='bi_description animate__animated  animate__fadeInUp'>Extract insights from Actionable Information Through Business Intelligence & Data Analytics to Drive Your Business</p>
                </div>
            </div>


            <div className="bi_tagline">
                <p>Our modern business intelligence (BI) services use a combination of business analytics, data mining, and data visualization to give you a complete view of our organization’s data. This enables your BI system to provide an excellent foundation for scorecard and performance measurement support. </p>
            </div>

            <div className='bi_offer'>
                <div className='bi_offer_left'>
                    <h1>What We Offer</h1>
                    <p>Turning your data into actionable insights. Our team of experts offers BI services to develop custom software platforms from scratch or modernize your existing analytics tools. With modern intelligence business solutions, you have access to the required information to make data-driven decisions. </p>
                    <p>Process and analyze data independently as and when required. We enable you to make future forecasts using predictive analytics capabilities. </p>
                </div>
                <div className='bi_offer_right'>
                    <img src='https://ishwarishinde.github.io/cdn/bi3.jpg' alt='discovery' className='bi_offer_right_img' />
                </div>
            </div>


            <div className='bi_insights'>
                <h1>Extract Insights from Actionable Data</h1>
                <div className='bi_insights_inner'>
                    <BiInsightsComponent insighttitle="Data Insights" insightdescription="Business intelligence and data warehouse system that is pre-configured to let you easily access relevant, timely business data. With Data Insights, you can quickly identify real-time requirements, monitor trends, and troubleshoot problems as they arise." insightimg="https://ishwarishinde.github.io/cdn/bi3.jpg" />
                    <BiInsightsComponent insighttitle="Data warehouse design" insightdescription="With the advent of data lake, we help you make the most of it. We have warehousing systems that can handle all the data your business needs, and we'll work with you to develop a strategic, systematic approach that meets your specific goals." insightimg="https://ishwarishinde.github.io/cdn/bi2.jpg" />
                    <BiInsightsComponent insighttitle="ERP & CRM implementation" insightdescription="Our system implementation is made stronger by business analytics solutions that are specifically designed for CRM and ERP deployments. This delivers the actionable data that helps ensure a strategic build, launch, and maintenance of your most fundamental business systems." insightimg="https://ishwarishinde.github.io/cdn/bi2.jpg" />
                    <BiInsightsComponent insighttitle="Power BI" insightdescription="Our Power BI experts can help you move your executives off spreadsheets by building interactive visualizations and business intelligence capabilities into your systems. We can also empower team leaders with the knowledge they need to quickly create the reports and dashboards required." insightimg="https://ishwarishinde.github.io/cdn/bi3.jpg" />
                </div>
            </div>


            <div className='bi_benefits'>
                <h1>Drive Your Business As</h1>
                <BiBenefitComponent benefittitle="It Enhances Business Efficiency" benefitdescription="We help companies in various industries to improve their operational efficiency by implementing the latest BI tools and technologies or upgrading the existing ones. With our help, you will be able to process large volumes of mixed data types more efficiently and effectively to find ways to enhance customer experience and retention, marketing, operations, etc. " />
                <BiBenefitComponent benefittitle="It Improves Risk Management" benefitdescription="Our business intelligence solutions help companies reduce risk and make data-driven decisions. Our BI tools can be used for fraud detection, monitoring fraudulent user behaviour, and detecting suspicious patterns. We develop predictive analytics solutions to make accurate forecasts of market demands and trends to mitigate various risks." />
                <BiBenefitComponent benefittitle="Allows you to control data quality" benefitdescription="We understand that it can be difficult for businesses to make decisions when they don't have all the information they need, which is why our solutions focus on providing comprehensive insights on financial and operational data. By automating reporting and improving decision making, we hope to save time and costs for analysis.  " />
            </div>

            <div className='bi_services'>
                <div className='bi_services_content'>
                <h1>Services</h1>
                <p>A strong business intelligence can be the cornerstone of your company's success. Let us help you develop your information using our BI analytical services.</p>
                <div className='bi_services_inner'>
                <div className='bi_services_inner_row'>
                    
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis1.png" bistitle="Advisory" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" />
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis2.png" bistitle="Data Warehousing Services" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" />
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis3.png" bistitle="Data Visualization & Reporting" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" /></div>
                    <div className='bi_services_inner_row'>
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis4.png" bistitle="Data Migration" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" />
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis5.png" bistitle="Data Validation" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" />
                    <BiservicesComponent bisimg="https://ishwarishinde.github.io/cdn/bis2.png" bistitle="Advisory" bisdescription="Our advisory services help you assess your big data maturity, develop a big data strategy roadmap, and consult on architecture and data governance. We can also help you with data modelling and technology recommendations. Don't hesitate to contact us today if you'd like to know more or if you'd like to see how we can help you!" /></div>

                </div></div>
            </div>
        </div>
    )
}

export default BusinessIntelligence