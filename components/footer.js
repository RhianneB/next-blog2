import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';


export default function Footer(){
    return(
        <footer className='flex flex-col space-y-4 items-center text-center justify-center w-full bg-rose-400 py-4 absolute bottom-0 mt-8'>
            <div className='flex text-2xl space-x-6'>
            <FaFacebookSquare className='hover:text-white'/>
            <FaLinkedin className='hover:text-white'/>
            <FaTwitterSquare className='hover:text-white'/>
            </div>
            <p className=''>Copyright @2022 All rights reserved</p>
        </footer>
    );
};