import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Circle } from './styles'

export default function Gola({icon, alt, val, text}){

    const [num, setnum] = useState(0)
    const interval= setInterval(() => {
        setnum(prevstate => (prevstate+1))
        // console.log(num)
    }, 10);
    setTimeout(() => {
        clearInterval(interval)
    }, 10);
    
    if(num > val-1){ 
        clearInterval(interval) 
    }

    return(
        <>
            <Circle className='flex flex-col justify-around place-items-center'>
                <Image src={icon} alt={alt} />
                <div className='text-center text-white tracking-wide font-bold'>
                    <p id='trial' className='trial'>{num}+</p>
                    <p>{text}</p>
                </div>
            </Circle>
        </>
    )
}