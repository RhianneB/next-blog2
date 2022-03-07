import Toggle from '../components/Toggle'

export default function Navbar(){
    return(
        <nav className="flex flex-col lg:flex-row mx-auto justify-between py-5 px-16 text-center space-y-4 md:space-y-8 lg:space-y-0">
                <a href="#" className="text-4xl font-bold text-black hover:animate-pulse hover:text-pink-500 ">RB</a>
                <div className='md:hidden'>
                    <Toggle/>
                </div>
            <div className="md:flex md:flex-row font-medium text-xl font-manrope md:space-x-16 justify-center space-y-3 md:space-y-0 font hidden md:visible">
                <a href="" className="text-black hover:underline hover:text-pink-500">Home</a>
                <a href="" className="text-black hover:underline hover:text-pink-500">Blog</a>
                <a href="" className="text-black hover:underline hover:text-pink-500">Contact</a>
            </div>
        </nav>
    );
};