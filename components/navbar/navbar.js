import {NavBar} from './styles'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logotextb 1.png'
import Script from 'next/script'

export default function Navbar() {
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
      setBrowser(true)
    }, [])
    
    if(browser){
        return(
            <>
                <Script>
                    {`

                        if(typeof window !== 'undefined'){

                            window.onscroll = function(e) {
                                
                                if(this.oldScroll > this.scrollY){
                                    var element = document.getElementById("bar");
                                    element.classList.remove("hide");
                                }
                                else{
                                    var element = document.getElementById("bar");
                                    element.classList.add("hide");
                                }
                                this.oldScroll = this.scrollY;
                              }
                        }

                    `}
                </Script>
                <NavBar id='bar' className='barInitial flex justify-between place-items-center'>
                    <Image alt="logo" placeholder="blur" src={logo}></Image>
                    <div className='flex gap-[1.5em] font-bold '>
                        <Link href = '#'>Home</Link>
                        <Link href = '#'>About</Link>
                        <Link href = '#'>Team</Link>
                        <Link href = '#'>Opportunities</Link>
                        <Link href = '#'>Blogs</Link>
                        <Link href = '#'>Contact</Link>
                    </div>
                </NavBar>   
            </>
        )
    }
}