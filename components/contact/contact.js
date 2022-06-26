import Image from "next/image"
import { useState, useEffect } from "react"
import Map from '../../public/pngegg.png'

export default function Contact(){
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)  
    }, [])

    if(browser){


        return(
        <> 
            <div className="mt-2 m-10 flex lg:flex-row-reverse flex-col gap-x-8 gap-y-5 text-[#121212]">

                <div className="basis-1/2 flex place-items-center mb-5">
                    <Image src={Map} quality="100%"></Image>
                </div>

                <form id="myForm" name="email-form" data-name="Email Form" className="basis-1/2 flex flex-col  gap-y-5">
                    
                    <div className="">
                        <div className="mb-3 text-[#f2f2f2]"><label for="Full-Name">Name</label></div>
                        <input type="text" className="rounded-sm h-[2rem] w-full" maxLength={32} name="Full-Name" data-name="Full Name" placeholder=" Full Name " id=" Full-Name" required="true"></input>
                    </div>
                    
                    <div>
                        <div className="mb-3 text-[#f2f2f2]"><label for="Email">Email</label></div>
                        <input type="email" className="rounded-sm h-[2rem] w-full" maxLength={32} name="Email" data-name="Email" placeholder=" E-mail" id="Email" required="true"></input>
                    </div>
                    
                    <div>
                        <div className="mb-3 text-[#f2f2f2]"><label for="Message">Message</label></div>
                        <textarea placeholder=" Message..." className="rounded-sm w-full" rows={5} maxLength={5000} id="Message" name="Message" data-name="Message" required="true" ></textarea>
                    </div>
                    
                    <input name="submit" type="submit" value="Submit" data-wait="Please wait..." className="py-1 mx-auto px-5 rounded-lg text-white text-sm bg-[#701a75] drop-shadow-lg hover:bg-[#621b66] hover:scale-105 duration-300 hover:cursor-pointer"></input>

                </form>                     
                
            </div>
        </>
        )
    }
    
}