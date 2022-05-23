import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Circle } from './styles'

import anime from 'animejs'

export default function Gola({icon, alt, val, text, id}){

    // const [num, setnum] = useState(0)
    // const interval= setInterval(() => {
    //     setnum(prevstate => (prevstate+1))
    //     // console.log(num)
    // }, time);
    // setTimeout(() => {
    //     clearInterval(interval)
    // }, time);
    
    // if(num > val-1){ 
    //     clearInterval(interval) 
    // }

    const [browser, setBrowser] = useState(false)
    useEffect(() => {
        setBrowser(true)
      }, [])

    if(browser){

        var myObject = {
            prop1: 0,
          }
      
          anime({
            targets: myObject,
            prop1: val,
            easing: 'linear',
            round: 1,
            update: function() {
              document.getElementById(id).innerHTML = JSON.stringify(myObject.prop1);
            }
          });

    return(
        <>
            <Circle className='flex flex-col justify-around place-items-center'>
                <Image src={icon} alt={alt} />
                <div className='text-center text-white tracking-wide font-bold'>
                    <p id={id} className='trial'></p>
                    <p>{text}</p>
                </div>
            </Circle>
        </>
    )

    }
}