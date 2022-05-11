import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { StatBar, Circle } from './styles'

import personIcon from '../../public/personIcon.svg'
import globeIcon from'../../public/globeIcon.svg'
import graduate from'../../public/graduate.svg'
import calendar from'../../public/calendar.svg'

export default function Statbar() {
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
      setBrowser(true)
    }, [])
    
    if(browser){
        return(
            <>
                <StatBar className='flex justify-around place-items-center'>
                    
                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={personIcon} alt="person icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>6000+</p>
                            <p>Members</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={globeIcon} alt="globe icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>30+</p>
                            <p>Countries</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={graduate} alt="graduation hat icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>10+</p>
                            <p>Mentors</p>
                        </div>
                    </Circle>

                    
                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={calendar} alt="calendar icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>5+</p>
                            <p>Events</p>
                        </div>
                    </Circle>
                    
                </StatBar>            
            </>
        )
    }
}