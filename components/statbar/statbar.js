import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { StatBar, Circle } from './styles'

import personIcon from '../../public/personIcon.svg'

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
                        <div className='text-center text-semibold'>
                            <p>6000+</p>
                            <p>Members</p>
                        </div>
                    </Circle>
                </StatBar>            
            </>
        )
    }
}