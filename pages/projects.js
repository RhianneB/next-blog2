import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'


export default function Projects({allPostsData}){
    return(
        <div className="font-mono">
            <Navbar/>
            <h3 className='text-2xl text-center underline pt-4 pb-10'>My Projects</h3>
            <div className='flex justify-around flex-col items-center lg:flex-row'>
            <ul>
            {allPostsData.map(({ id, date, title, link}) => (
                <li className='mb-10' key={id}>
                <Link href={`/posts/${id}`}>
                    <a className='text-black text-xl'>{title}</a>
                </Link>
                <br />
                <small className='text-rose-400'>
                    <Date dateString={date} />
                </small>
                <div>{link}</div>
                </li>
            ))}
            </ul>
            </div>
            <Footer/>

        </div>
        
    );
};

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  