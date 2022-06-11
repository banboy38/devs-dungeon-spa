import { useEffect, useState, useRef } from 'react'

import { StatBar } from './styles'

import Gola from './theCircle'

import personIcon from '../../public/personIcon.svg'
import globeIcon from'../../public/globeIcon.svg'
import graduate from'../../public/graduate.svg'
import calendar from'../../public/calendar.svg'

export default function Statbar() {
    const [browser, setBrowser] = useState(false)
    const [stats, setStats] = useState({members : 0, countries : 0, mentors : 0, events : 0, id : 1})

    

    useEffect(() => {
      setBrowser(true)
    }, [])


    const [nums, setNums] = useState({members:0, country:0, mentors:0, events:0})
    
    // if(browser){

        // setInterval(() => {

        //     setNums(nums => ({members : nums.members+1}))
        //     console.log(nums.members)
            
        // }, 2000);

        return(
            <>
                <StatBar className='flex justify-around place-items-center'>
                    
                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={personIcon} alt="person icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>{nums.members}</p>
                            <p>Members</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={globeIcon} alt="globe icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>30+</p>
                            <p>Countries</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={graduate} alt="graduation hat icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>10+</p>
                            <p>Mentors</p>
                        </div>
                    </Circle>

    
    if(browser){   
        
        return(
            <>
                <StatBar className='flex flex-wrap gap-y-2  gap-x-2 justify-around place-items-center'>


                    <Gola icon = {personIcon} val={100} alt="person icon" text="Members" id="members"/>

                    <Gola icon = {globeIcon} val={30} alt="globe icon" text="Countries" id="countries"/>

                    <Gola icon = {graduate} val={10} alt="graduation hat icon" text="Mentors" id="mentors"/>

                    <Gola icon = {calendar} val={5} alt="calendar icon" text="Events" id="events"/>
                    
                </StatBar>          
            </>
        )

