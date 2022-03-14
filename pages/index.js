import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profilePic from '../public/images/Rhianne.png'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="font-mono relative min-h-screen">
      <div className='pb-60 '>
        <Head>
            <title>Rhianne Bruce</title>
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <Navbar/>
          <div className="flex flex-col lg:flex-row-reverse px-20 md:px-12 lg:px-0 lg:mt-14 space-y-6 items-center lg:justify-center lg:space-x-reverse lg:space-x-28">
            <div className='mt-4 max-w-[270px] h-auto drop-shadow-[0_25px_25px_rgba(251,113,133,0.5)]'>
            <Image src={profilePic} alt="Person"/>
            </div>
            <div className='flex flex-col items-center space-y-10 md:max-w-lg'>
              <h1 className="text-5xl text-center">Hello, I'm Rhianne</h1>
                <p className='text-center'>
                I'm an ambitious new developer with a passion to explore the world of web development focusing on user experience and web design
                </p>
                <a href="/CV.pdf" download={"CV-Rhianne Bruce.pdf"}>
                  <button className='text-xl font-medium text-white bg-rose-400 hover:bg-black hover:animate-bounce py-3 px-5 rounded-3xl'>Download CV</button>
                </a>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}




