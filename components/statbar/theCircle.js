import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Circle } from './styles'
import Script from 'next/dist/client/script'

import anime from 'animejs'

export default function Gola({icon, alt, val, text, id}){

    const [browser, setBrowser] = useState(false)
    useEffect(() => {
        setBrowser(true)
      }, [])

    if(browser){

      var myObject = {
        prop1: 0,
      }
        
      function animate(){
        
        anime({
          targets: myObject,
          prop1: val,
          easing: 'easeInSine',
          round: 1,
          update: function() {
            document.getElementById(id).innerHTML = JSON.stringify(myObject.prop1)+"+";
          }
        });
      }
          

        setTimeout(() => {

          function increment() {
            const ceil = document.getElementById(id).getBoundingClientRect().top

            if (ceil < 80 / 100 * (window.innerHeight)) {
              animate()              
            }
          }

          window.addEventListener("scroll", increment)

        }, 0);
         
          
      
    return(
        <>
            <Circle className='flex flex-col justify-around place-items-center'>
                <Image src={icon} alt={alt} />
                <div className='text-center text-white tracking-wide font-bold'>
                    <p id={id} className='trial'>0+</p>
                    <p>{text}</p>
                </div>
            </Circle>
        </>
    )

    }
}