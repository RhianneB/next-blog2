import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';


export default function Footer(){
    return(
        <footer className='flex flex-col space-y-4 mt-12 items-center'>
            <div className='flex text-2xl space-x-6'>
            <FaFacebookSquare className='hover:text-pink-500'/>
            <FaLinkedin className='hover:text-pink-500'/>
            <FaTwitterSquare className='hover:text-pink-500'/>
            </div>
            <p className=''>Copyright @2022 All rights reserved</p>
        </footer>
    );
};