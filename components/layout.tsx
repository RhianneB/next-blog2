import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './footer'


export default function Layout({ children, home }: {children: React.ReactNode 
    home?: boolean}) {
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
        