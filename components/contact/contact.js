import { useState, useEffect } from "react"


export default function Contact(){
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)  
    }, [])

    if(browser){


        return(
        <> 
            <div className="flex flex-col gap-y-2 justify-items-center  bg-[url('/public/pngegg.png'">
            <h1 className="text-center text-2xl text-white font-semibold]">Contact Us</h1>
            <br/>
            <div className="mx-[20em]">
            <form id="myForm" name="email-form" data-name="Email Form" className="flex flex-col gap-y-2 text-black">
                <input type="text" className="" maxlength="256" name="Full-Name" data-name="Full Name" placeholder="Your Full Name " id="Full-Name" required=""></input><br/>
                    <input type="email" className="" maxlength="256" name="Email" data-name="Email" placeholder="Your E-mail" id="Email" required=""></input><br/>
                        <textarea placeholder="Your Message..." maxlength="5000" id="Message" name="Message" data-name="Message" required="" class=""></textarea><br/>
                        <input name="submit" type="submit" value="Submit" data-wait="Please wait..." className="mt-10 py-1 mx-auto px-5 rounded-md text-white text-sm bg-[#701a75] drop-shadow-lg" onclick=""></input><br/>

            </form>
           
                    {/* <div className=" text-center">
                        <div class="text-block">Thank you! Your submission has been received!</div>
                    </div>
                    <div className="text-center">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>         */}
            </div>  
            </div>
        </>
        )
    }
    
}