import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './footer'

const name = 'Rhianne Bruce'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className='font-mono'>
            <Navbar/>
            <div className="max-w-xl py-0 px-4 mt-12 mx-auto mb-24">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="My portfolio"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
            {!home && (
                <div className="pt-12">
                    <Link href="/projects">
                        <a className='text-black hover:animate-pulse'>← Back to Projects</a>
                    </Link>
                </div>
            )}
        </div>
    )

    <Footer/>

        </div>
    )}
        