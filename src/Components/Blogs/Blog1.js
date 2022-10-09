import React from 'react'
import '../../CSS/blog1.css';
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

const Blog1 = () => {
  return (
    <div className='blog1'>
        <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg1.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>Global Economy and Trade Impact of COVID-19</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Smita Nikam</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>Confirmed cases of the novel coronavirus COVID-19 more than 1 million, which was first appeared in China at the end of last year. As the world grapples with this deadly disease, the economic impact is mounting. The human cost is going unimaginably high due to coronavirus.</p>
                    <p>Although the outbreak appears slowed in China, but rapidly increasing globally. The businesses are coping up with losing revenue, and this epidemic impacts how much economic support governments are willing to deploy due to the extent of the damage. The increased immediate impact and uncertainty have led to financial market volatility.</p>
                    <p>As per the records :</p>
                    <p>Ø More than 6.6 million Americans filed unemployment claims last week, as this pandemic virus increasing rapidly.</p>
                    <p>Ø The Asian Development Bank warns the global cost may exceed $4.1 trillion.</p>
                    <p>Ø Half of the jobs all over the world are at risk due to this deadly infectious virus.</p>
                    <p>Ø Barclays estimates that 21 days lockdown in India could bring growth down to 2.5% from the 4.5% which had estimated earlier.</p>
                    <h3>Sectors and Economies are most vulnerable:</h3>
                    <p>The COVID-19 outbreak has generated the largest downward growth in the countries which are interconnected to China in business. </p>
                    <p>At the sector level, travel and tourism or any travel-related industries will be among the hardest hit, as the government assists in “Social Distancing” to avoid the spread of the infectious virus and people stay indoors to protect themselves.</p>
                    <p>World Health Organization (WHO) and the World Bank estimate the situation which impacts at 2.2 percent to 4.8 percent of global GDP (US $3 trillion).</p>
                    <p>Among the most affected economies are the European Union (USD 15.6 billion), the United States (USD 5.8 billion), Japan (USD 5.2 billion), South Korea (USD 3.8 billion), Taiwan Province of China (USD 2.6 billion) and Vietnam (USD 2.3 billion). When compared to other economies such as the EU, the US, Japan, and South Korea, the trade impact for India is less and Indonesia is 312 million dollars.  </p>
                    <p>Precision instruments, machinery, automotive and communication equipment are the most affected sectors. Anyone part of the world's slowdown in manufacturing will be directly affecting the economic and trade activity across the globe and can’t assure the condition until the deadly virus slows down.</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog1