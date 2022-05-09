import {NavBar} from './styles'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logotextb 1.png'

export default function Navbar() {
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
      setBrowser(true)
    }, [])
    
    if(browser){
        return(
            <NavBar className='flex justify-between place-items-center'>
                <Image alt="logo" src={logo}></Image>
                <div className='flex gap-[1.5em] font-bold '>
                    <Link href = '#'>Home</Link>
                    <Link href = '#'>About</Link>
                    <Link href = '#'>Team</Link>
                    <Link href = '#'>Opportunities</Link>
                    <Link href = '#'>Blogs</Link>
                    <Link href = '#'>Contact</Link>
                </div>
            </NavBar>   
        )
    }
}