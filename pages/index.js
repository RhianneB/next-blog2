import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profilePic from './Rhianne.png'
import Footer from '../components/footer'




export default function Home() {
  return (
    <div className="font-mono relative min-h-screen">
      <div className='pb-60'>
        <Head>
            <title>Rhianne Bruce</title>
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <Navbar/>
          <div className="flex flex-col lg:flex-row-reverse px-20 md:px-12 lg:px-0 lg:mt-14 space-y-6 items-center lg:justify-center lg:space-x-reverse lg:space-x-28">
            <div className='mt-4 max-w-[270px] h-auto '>
            <Image src={profilePic} alt="Person"/>
            </div>
            <div className='flex flex-col items-center space-y-10 md:max-w-lg'>
              <h1 className="text-5xl text-center">Hi, I'm Rhianne</h1>
                <p className='text-center'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <a href= './Sample-CV.pdf' download ='CV'>
                  <button className='text-xl font-medium text-white bg-pink-400 hover:bg-black py-3 px-5 rounded-3xl'>Download CV</button>
                </a>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
