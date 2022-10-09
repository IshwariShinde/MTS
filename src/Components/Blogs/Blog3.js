import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog1.css'
import '../../CSS/blog3.css'

const Blog3 = () => {
    return (
        <div className='blog3'>
            <div className='blog_container'>
                <div className='blogContainer_img'>
                    <img src="https://ishwarishinde.github.io/cdn/blogimg3.jfif" alt="img" className='blogContainer_imgInner' />
                </div>
                <div className='blogContainer_content'>
                    <h1>What are the sources you should and shouldn’t trust on the coronavirus?</h1>
                    <div className='blogContainer_blogInfo'>
                        <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Vaibhav Kadam</h5></div>
                        <div className='blogContainer_blogDate'><MdOutlineDateRange /><h5>12/31/2020</h5></div>
                    </div>
                    <div className='blogContainer_contentInfo'>
                        <p>Amid the Coronavirus pandemic, with more than 1 million positive cases and 51000 deaths recorded worldwide including more than 3000 positive cases India, it can be hard to keep track of what’s true and what’s false information available on a different internet platform. There is a constant flood of information/news from across the world, some of it based on false assumptions or scared reactions that fail to put data into proper context.</p>
                        <p>Social media is a crowded space full of updates, news, advice, treatments, and warnings —and it’s causing a septicity of misinformation. But you can take different steps to avoid or ignore bad data. Here is what to trust and what not to:</p>
                        <p>Information from the World health organization (WHO) website (www.who.int)</p>
                        <p>Information from government sources such as from the Ministry of health and family welfare India website (https://www.mohfw.gov.in/)</p>
                        <p>· Country-specific government agencies like the Centers for Disease Control and Prevention (CDC -https://www.cdc.gov/), and the National Institutes of Health (NIH) in the US, the Public Health Agency Canada or the National Health Service in the UK, etc.</p>
                        <p>Each of the above sources includes information such as</p>
                        <p>Up-to-date stats
                            How the disease spreads,


                            · Prevention measures,


                            · Advice on treatment,


                            · Answers to frequently asked questions.
                        </p>
                        <p>It’s predominantly important to take care of platforms like Facebook, WhatsApp, Twitter, Instagram, Tik-Tok or YouTube, which even in pandemic-free circumstances struggle to curb misinformation. </p>
                        <p>And misinformation about coronavirus has flooded different social media platforms: many claims that drinking hot water cure the virus while other say consuming Vitamin C and Zinc will do the same ( there is no widely available treatment for the virus, an experimental drug is being used worldwide to cure from case to case basis). Any medical advice on social media is good to ignore.</p>
                        <h3>Ignore home remedies and cures, they don’t exist:</h3>
                        <p>Many in the social media platform will try to offer home-made remedies and miracle cures.  I have noticed many health publications offering free energy healing, a social media post about shoving colloidal silver up your nose. While not sure if these are intentional disinformation, however, they could be harmful if someone sick tries it instead of actual medical advice.</p>
                        <p>Many are trying to make monetary benefits on coronavirus misinformation. Hence it is advised by all government health agencies and government spokespersons not to rely on other than government sources for any information related to coronavirus.</p>
                        <p>Medical practitioners world worldwide are helping to accelerate research and development efforts to combat this serious issue. Meanwhile, only advice from your health workers is to “You stay at home, while we are at work”</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog3