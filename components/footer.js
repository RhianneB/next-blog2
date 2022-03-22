import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import {SiGitlab} from "react-icons/si";


export default function Footer(){
    return(
        <footer className='flex flex-col space-y-4 items-center text-center justify-center w-full bg-rose-400 py-4 bottom-0 fixed mt-8'>
            <div className='flex text-2xl space-x-6'>
            <FaFacebookSquare className='hover:text-rose-600 hover:animate-bounce '/>
            <FaLinkedin className='hover:text-rose-600 hover:animate-bounce '/>
            <SiGitlab className='hover:text-rose-600 hover:animate-bounce'/>
            </div>
        </footer>
    );
};