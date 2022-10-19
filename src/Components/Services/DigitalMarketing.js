import React from 'react'
import '../../CSS/digitalmarketing.css'
import DigitalMarketingServicesComponent from './DigitalMarketingServicesComponent'

const DigitalMarketing = () => {
  return (
    <div className='digitalmarketing'>
      <div className='dm_top'>
        <div className='dm_heading_container '>
          <p className='dm_heading animate__animated  animate__fadeInUp'>Digital Marketing</p>
          <p className='dm_description animate__animated  animate__fadeInUp'>Drive Quality Traffic and Increase Your Conversion Rate for a More Significant ROI.</p>
        </div>
      </div>

      <div className='dm_tagline'>
        <p>With a tailored marketing strategy that is based on your objectives and data-driven insights, you can scale up your business online and thrive in the ever-changing digital world. The in-depth expertise of our digital marketers and intuitive technology will help you drive quality traffic, increase your conversion rate, and enjoy a more significant ROI.</p>
      </div>
      <div className='dm_offer'>
        <h1>Digital Marketing Services We Expertise</h1>
        <div className='dm_services_inner'>
          <div className='dm_services_inner_row'>
            <DigitalMarketingServicesComponent dmtitle="Search Engine Optimization (SEO)" dmdescription="SEO is a complex and a dynamic field, but there are some tried-tested methods that can help improve your website's ranking. We only use approved methods that have been shown to have positive, long-term effects on placement. Our strategies include strong on-page content optimization and by creating a healthy off-page presence with quality link building. Its importance in an online marketing plan cannot be ignored, and with our strategy, your website can certainly see improved rankings." />
            <DigitalMarketingServicesComponent dmtitle="Pay Per Click (PPC) Marketing" dmdescription="It could help to speed up the process if you're impatient for your SEO to generate results. We specialize in helping you find the right balance between PPC, content marketing, inbound marketing, SEO, and social media advertising. When these things work in a synchronized manner, they can give your brand a major boost! If you want to know more as to how we can help your business generate new leads with PPC, get in touch with us today. We would be more than happy to discuss how we can help you take your business to the next level!
" />
            <DigitalMarketingServicesComponent dmtitle="Content Marketing" dmdescription="Content marketing helps build trust and loyalty with your customers and readers. Fans of your brand are more likely to buy what you are selling. We create a strategy where we make and share content that is both engaging and useful to your potential customers. We can do this by blogging, creating infographics, whitepapers, and other downloads. By getting your brand positioned in a way where you engage with people who are interested in what you have to offer, we ensure that your business is found, trusted, and shared by customers." />
          </div>
          <div className='dm_services_inner_row'>
            <DigitalMarketingServicesComponent dmtitle="Social Media Management" dmdescription="Creating meaningful relationships with current and potential consumers needs an active brand presence on social media. To build brand awareness and engagement, and developing a cohesive voice that best represents your voice in the digital space, is where we come in. With quality content, proven methods, and customized goal-focused strategies we can help you reach your target audience. We can also help you create personal connections that amplify results across earned, owned, and paid media to drive ROI." />
            <DigitalMarketingServicesComponent dmtitle="Link Building" dmdescription="The most effective way to have a steady stream of traffic and increase consumer trust is to have your content published on high-authority websites. Our internet marketing agency will help you do this by making the most of paid advertisements, sponsorships, and collaborations. We will also use strategic guest blogging, infographics, and social media engagement to build quality backlinks that drive more sales-All in sync to help you build quality backlinks." />
            <DigitalMarketingServicesComponent dmtitle="Online Reputation Management (ORM)" dmdescription="Your business' success online is directly correlated with the number and quality of reviews you have. Improve your reputation and boost your online presence by working with us. We help increase the number of reviews you're getting, as well as monitor and respond to them. With our cutting-edge online reputation management software, we can streamline your practices and quickly acquire more positive reviews - it's a win-win situation!" />
          </div>
        </div>
        {/* <p>If you are on the lookout for ways to promote your business online and looking for a marketing service that can help you reach a broader audience, you are on the right page as our digital marketing offers a multitude of ways to achieve this. We execute digital marketing campaigns that can help you achieve conversion and engagement goals for your website and business. </p> */}

      </div>
      <div className='dm_package'>
        <h1>Our Cost-effective Plans Can Help You Provide A Better Experience For Your Clients </h1>
        <div className='dm_package_inner'>
          
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing