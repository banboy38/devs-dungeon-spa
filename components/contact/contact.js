import { useState, useEffect } from "react"
import globePic from './globe.jpg'

export default function Contact(){
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)  
    }, [])

    if(browser){


        return(
            <>  
                <div className=""><img src={globePic} className='bg-fixed'></img></div>
            </>
        )
    }
    
}