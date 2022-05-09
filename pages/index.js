import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import mainPic from '../public/Group 119.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <Head>
        <title>DEVs Dungeon</title>
      </Head>

      <Navbar/>
      
      <div className='mt-[20vh] gap-5 flex justify-around place-items-center p-7'>

        <div className='text-[rgba(255,255,255,1)] w-[636px] h-[137px]'>
          <p>We are one of the world's fastest growing developers' community, connecting thousands of developers from across the world and making learning much more collaborative and fun.</p>
          <p className='rounded-full bg-white text-black shadow-lg hover:text-white hover:bg-gray-900 text-center pt-[0.2em] p-[0.3em] mt-4 w-[5em]'><Link href='#'>Join Us</Link></p>
        </div>
        <Image alt="abstract office picture" src={mainPic}></Image>

      </div>

    </>
  )
}
