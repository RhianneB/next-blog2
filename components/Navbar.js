import Toggle from '../components/Toggle'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import Link from 'next/link'

export default function Navbar(){
    return(
        <nav className="flex flex-col lg:flex-row  justify-between items-center py-5 px-16 text-center space-y-4 md:space-y-8 lg:space-y-0">
            <div className='h-28 w-28'>
            <Image className='' src={logo} alt="Person"/>
            </div>
            <div className='md:hidden'>
                <Toggle/>
            </div>
            <div className="md:flex md:flex-row font-medium text-xl lg:self-start font-manrope md:space-x-16 justify-center self-center space-y-3 md:space-y-0 font hidden md:visible">
                <p>
                    <Link href="/">
                        <a className="text-black hover:underline hover:text-rose-400">Home</a>
                    </Link>
                </p>
                <p>
                    <Link href="/projects">
                        <a className="text-black hover:underline hover:text-rose-400">Projects</a>
                    </Link>
                </p>
                <p>
                    <Link href="contact">
                        <a className="text-black hover:underline hover:text-rose-400">Contact</a>
                    </Link>
                </p>
            </div>
        </nav>
    );
};