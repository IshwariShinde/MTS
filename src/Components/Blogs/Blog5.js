import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog5.css'

const Blog5 = () => {
  return (
    <div className='blog5'>
        <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg5.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>Stuck indoors due to the COVID-19 scare? How best can you utilize this time?</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Rakesh Nikam</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>The time the whole world is fighting against the deadly coronavirus. The everlasting quote “Prevention is better than Cure” is the significant role majorly playing now. To prevent this infectious virus, lockdown is been called to people. Social Distancing is the best way to be safe.</p>
                    <p>
                    Amid the lockdown, schools and colleges, industries, MNC’s, small scale business and large scale and each and everything is closed. A lockdown period can be difficult and complex time, as nobody is used to locking themselves for a long period.</p>
                    <p>Instead of being stuck, there are many ways to utilize this period. If we organize our time and set a certain schedule with our activities, we can make proper usage of this lockdown period. So, instead of staying idle for a long period of time without going out or doing nothing, here are some ideas that may help you! </p>
                    <p>The virus is said to be spread primarily from person-to-person.</p>
                    <b>Family:</b>
                    <p>Working one will always have complaints about not giving time to your family. For you guys, here is the proper time to spend with your loved ones at home.</p>
                    <p>Revisit old memories, start playing games, do photo-shoot with your family members, do some funny videos, watch movies together with homemade snacks in-hand, if interest in cooking tries new dishes. Love painting, the start funny things with kids. Love reading books, a good habit to improve knowledge. </p>
                    <p>Indulge in gardening involve your kids in the same, also pamper your pets, start sharing your experience in wok location with family members, share some knowledge and make this time full of positive vibes with your loved family.</p>
                    <b>Fitness:</b>
                    <p>If you are a fitness freak, then not only the gym or any private class will help you at this point in time. You bring your own teaching partner and can view videos on exercise which you can also include yoga if you love it.</p>
                    <p>And not only exercising or doing yoga will help you to stay fit, but also a healthy good diet also plays an important role. So find healthy food items, which will help you to boost your stamina and inculcate a lot of energy.</p>
                    <p>Also, if you love dancing, practice, give a try, and learn new forms of dance, as you will be able to find n number of videos, which helps you to learn.</p>
                    <b>Self:</b>
                    <p>Often a time for self is much needed. Love yourself more. Pamper yourself. Take good care of your physical and mental health.</p>
                    <p>Think about your future plans, if passion about fashion looks try experimenting. Time to reconnect with old friends and colleagues. Think about passion, start implementing it, as you love to do!</p>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog5