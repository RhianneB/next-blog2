import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import profilePic from '../public/images/Rhianne.png'
import Footer from '../components/footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Card from '../components/Card'



export default function Home({posts}) {
  console.log(posts);
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
      <div className='pb-32'>
        {posts.map(post =>(
          <Link href={'/posts/${post.slug}'} key={post.slug}>
            <a>
              <Card post={post}/>
            </a>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  let files = fs.readdirSync(path.join('pages/posts'));
  files = files.filter(file => file.split(".")[1] === 'mdx');
  const posts = await Promise.all(
    files.map(file =>{
      const mdWithData = fs.readFileSync(
        path.join('pages/posts', file), 
        "utf-8"
        );
      const {data: frontMatter } = matter(mdWithData);
      return {
        frontMatter,
        slug: file.split(".")[0],
      };
    })
  )
  return {
    props: {
      posts,
    }
  };
}



