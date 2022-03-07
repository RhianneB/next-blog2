import {FaAlignJustify} from 'react-icons/fa';
import Link from 'next/link'
import { useState } from "react";

export default function Toggle(){
    const [show, setShow] = useState(false);
    function toggle(){
        setShow(!show);
    }
    return (
        <div className='flex flex-col items-center space-y-4'>
            <button className='flex text-2xl'onClick={toggle}><FaAlignJustify/></button>
            {/*The bottom code should toggle on and off when the button is pressed*/}
            <div style={{
            display: show?"block":"none"
            }}>
                <div className='flex flex-col space-y-4 text-center'>
                <Link  href="/">
                    <a className="hover:text-pink-500 hover:underline">Home</a>
                </Link>
                <Link  href="/">
                    <a className="hover:text-pink-500 hover:underline">Blog</a>
                </Link>
                <Link  href="/">
                    <a className="hover:text-pink-500 hover:underline">Contact</a>
                </Link>
                </div>
            </div>
        </div>
    );
}
