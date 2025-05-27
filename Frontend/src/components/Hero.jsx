import Background from '../assets/Backgroudn Gradient.png'
import { BriefcaseBusiness, Search } from 'lucide-react';
import HorizontalScrollingImages from './HorizontalScrollingImages';

const Hero = () => {
    return (
        <div className='flex justify-center'>
            <img src={Background} alt="Background" className="fixed -z-1 w-full h-screen object-cover" />
            <div className="w-4xl flex flex-col gap-6 items-center pt-38">
                <div className='w-fit px-6 py-2 items-center text-primary flex gap-2 bg-white rounded-full'>
                    <BriefcaseBusiness size={20} strokeWidth={1} className='text-black text-primary ' />
                    Your #1 Platform for Skill Sharing
                </div>
                <h1 className='text-7xl font-semibold text-center text-primary'>Showcase Your Mastery. Get Connected</h1>
                <p className='w-md text-center text-lg text-secondary'> Create your profile, showcase your skills, and let employers find you.</p>
                <div className='w-2xl flex gap-3'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-3 px-6 border border-neutral-300 rounded-full'>
                            <Search size={20} strokeWidth={2} className='text-primary ' />
                            <input className='w-full px-2 py-4  focus:outline-none' placeholder='Courses...' ></input>
                        </div>
                    </div>
                    <button className='w-fit bg-button rounded-full text-white px-12 py-4'>Search</button>
                </div>
                {/* <div className=''>
                    <HorizontalScrollingImages />
                </div> */}
            </div>
        </div>
    )
}

export default Hero
