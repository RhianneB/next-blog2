import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import Card from '../components/Card';
export default function Projects(){
    return(
        <div className="font-mono">
            <Navbar/>
            <h3 className='text-2xl text-center underline pt-4 pb-10'>My Projects</h3>
            <div className='flex justify-around flex-col items-center lg:flex-row'>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
            <Footer/>
        </div>
        
    );
};