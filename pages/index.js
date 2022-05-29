import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import mainPic from '../public/Group 119.svg'
import twoPic from '../public/pic2.svg'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Statbar from '../components/statbar/statbar'
import { StatBar } from '../components/statbar/styles'
import Card from '../components/card/card'
import { useEffect, useState } from 'react'

import surana from '../public/surana-pic.png'
import banboy from '../public/banboy-pic.png'


export default function Home() {


  const [browser, setbrowser] = useState(false)
  useEffect(() => {
    setbrowser(true)
  }, [])
  
  if(browser){
    return (
      <>

        <Head>
          <title>DEVs Dungeon</title>
        </Head>

        <Script>
            {`

            function fadeUp() {
              var reveals = document.querySelectorAll(".textAnim");

              for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 0;
                // console.log(elementTop, windowHeight, elementVisible);
                if (elementTop < (80/100)*windowHeight) {
                  reveals[i].classList.remove("fade");
                } else {
                  reveals[i].classList.add("fade");
                }
              }
            }

            if(typeof window !== 'undefined'){
              window.addEventListener("scroll", fadeUp);
            }

            `}
          </Script>

        <Navbar/>
        
        <div className='m-2 mt-[6rem] md:mt-[7rem] gap-5 flex flex-wrap flex-col-reverse md:flex-nowrap md:flex-row justify-around place-items-center p-2'>

          <div className='text-[rgba(255,255,255,1)] w-[90%] md:w-[50%]'>
            <p>We are one of the world's fastest growing developers' community, connecting thousands of developers from across the world and making learning much more collaborative and fun.</p>
            <p className='rounded-full bg-white text-black shadow-lg hover:text-white hover:bg-gray-900 text-center pt-[0.2em] p-[0.3em] mt-4 w-[5em]'><Link href='#'>Join Us</Link></p>
          </div>
          <Image alt="abstract office picture" src={mainPic}></Image>

        </div>

        <div id = "about"></div>

        <div className='textAnim'>

          <div className='text-center text-2xl text-white font-semibold mt-[5rem]'>Perks of joining us</div>
          
          <div className='mt-[0vh] gap-5 flex flex-wrap justify-around place-items-center p-2'>
            
            <Image alt="abstract office picture" src={twoPic}></Image>

            <div className='text-[rgba(255,255,255,1)] w-[90%] md:w-[50%]'>
              <ul>
                <li>➤ Share your work, get advice and collaborate with a large diverse group</li>
                <li>➤ Grow your connection and meet new friends and business contacts</li>
                <li>➤ Receive guidance, motivation and emotional support from the mentors</li>
                <li>➤ Platform to organize cohorts, events, talks, and various other activities</li>
                <li>➤ Career growth section dedicated to jobs, higher education and resources</li>
                <li>➤ Notification of major global Events, Job openings, and Hackathons</li>     
              </ul>
            </div>
          
          </div>

        </div>

        <Statbar/>
        
        <div className='text-center text-2xl text-white font-semibold mt-[5rem] '>Meet Our Team</div>

        <StatBar className='flex flex-wrap gap-y-2 justify-around place-items-center' style={{"marginTop":"2rem"}}>
            <Card photo={surana} name="Shubham Surana" role="Founder" instaUser="boss__is__always__right" githubUser='neklaustares-tptwp'/>
            <Card photo={banboy} name="Anirban Aditya Halder" role="Founder ka dost" instaUser="banboy38" githubUser='banboy38' linkedinUser='anirban-aditya-halder'/>
        </StatBar>
    
        

      </>
    )
  }
}
