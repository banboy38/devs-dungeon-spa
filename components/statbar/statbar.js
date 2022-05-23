import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { StatBar, Circle } from './styles'
import Gola from './theCircle'


import personIcon from '../../public/personIcon.svg'
import globeIcon from'../../public/globeIcon.svg'
import graduate from'../../public/graduate.svg'
import calendar from'../../public/calendar.svg'

export default function Statbar() {
    const [browser, setBrowser] = useState(false)
    const [stats, setStats] = useState({members : 0, countries : 0, mentors : 0, events : 0, id : 1})

    

    useEffect(() => {
      setBrowser(true)
    }, [])

    const [num, setnum] = useState(0)
    const interval= setInterval(() => {
        setnum(prevstate => (prevstate+1))
        console.log(num)
    }, 1);
    setTimeout(() => {
        clearInterval(interval)
    }, 1);
    
    if(num > 99){ 
        clearInterval(interval) 
    }

    const [country, setcountry] = useState(0)
    const interval2 = setInterval(() => {
        setcountry(prevstate => (prevstate+1) )
    }, 1);
    setTimeout(() => {
        clearInterval(interval2)
    }, 1);
    
    if(country > 29){ 
        clearInterval(interval2) 
    } 

   
    
    if(browser){   

        
        return(
            <>
                <Script>
                    {`
                        
                    //     var nodes = document.querySelectorAll(".trial");
                    
                    //     for (var i = 0; i < nodes.length; i++) {
                    //         var windowHeight = window.innerHeight;
                    //         var elementTop = nodes[i].getBoundingClientRect().top;

                    //         if (elementTop < (85/100)*windowHeight) {
                    //             nodes[i].classList.add("active");
                    //         }
                    //         else {
                    //             nodes[i].classList.remove("active");
                    //         }
                    //     }
                        

                    //     if(typeof window !== 'undefined'){
                    //         window.addEventListener("scroll", reveal);
                    //       }
                    // `}
                </Script>

                <StatBar className='flex justify-around place-items-center'>

                    <Gola icon = {personIcon} val={100} alt="person icon" text="Events" time={10}/>

                    <Gola icon = {globeIcon} val={30} alt="globe icon" text="Countries" time={10}/>

                    <Gola icon = {graduate} val={10} alt="graduation hat icon" text="Mentors" time={10}/>

                    <Gola icon = {calendar} val={5} alt="calendar icon" text="Events" time={10}/>
                    
                </StatBar>            
            </>
        )
    }
}