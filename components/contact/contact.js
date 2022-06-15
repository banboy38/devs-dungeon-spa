import { useState, useEffect } from "react"


export default function Contact(){
    const [browser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true)  
    }, [])

    if(browser){


        return(
        <> 
            <div className="textAnim fade mt-2 "><div className=" bg-[url('/public/pngegg.png'">
            <h1 className="text-center text-3xl text-white"><b>Contact Us</b></h1>
            <br/>
            <div className="mx-[20em]">
            <form id="myForm" name="email-form" data-name="Email Form" className=" flex flex-col justify-items-center m-auto w-4/5 gap-y-2 text-black">
                <input type="text" className="rounded-sm" maxLength={256} name="Full-Name" data-name="Full Name" placeholder=" Your Full Name " id="Full-Name" required=""></input>
                <br/>
                <input type="email" className="rounded-sm" maxLength={256} name="Email" data-name="Email" placeholder=" Your E-mail" id="Email" required=""></input><br/>
                <textarea placeholder=" Your Message..." maxLength={5000} id="Message" name="Message" data-name="Message" required="" className="rounded-sm"></textarea>
                <br/>
                <br/>
                       <div className="flex rounded-sm"> <input name="submit" type="submit" value="Submit" data-wait="Please wait..." className="mt-3 py-1 mx-auto px-5 rounded-lg text-white text-sm bg-[#701a75] drop-shadow-lg hover:bg-[#621b66] hover:scale-105" onClick=""></input></div><br/>

            </form>
           
                    {/* <div className=" text-center">
                        <div class="text-block">Thank you! Your submission has been received!</div>
                    </div>
                    <div className="text-center">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>         */}
            </div>  
            </div></div>
        </>
        )
    }
    
}