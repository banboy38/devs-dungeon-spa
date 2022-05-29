import { useState, useEffect } from "react"
import { TheCard } from './styles'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Card({photo, name, role, instaUser="", githubUser="", linkedinUser=""}){
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)  
    }, [])

    if(browser){


        return(
            <>  
                <TheCard>
                    <Image className="rounded" height="120px" width="120px" src={photo} placeholder="blur"></Image>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm">{role}</p>
                    <p className="w-[70%] flex flex-row justify-evenly"><a href={"https://github.com/"+githubUser} target="_blank"><FaGithub/></a> <a href={"https://instagram.com/"+instaUser} target="_blank"><FaInstagram/></a> <a href={"https://linkedin.com/in/" + linkedinUser} target="_blank"><FaLinkedinIn/></a></p>
                    
                </TheCard>
            </>
        )
    }
    
}