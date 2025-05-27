import Background from '../assets/Backgroudn Gradient.png'
import { BriefcaseBusiness } from 'lucide-react';

const Hero = () => {
  return (
    <div className="">
      <img src={Background} alt="Background" className="fixed -z-1 w-full h-screen object-cover" />
      <div className='flex gap-2 bg-white rounded-full'>
        <BriefcaseBusiness size={20} strokeWidth={1} className='text-black  ' />
        Your #1 Platform for Skill Sharing</div>
    </div> 
  )
}

export default Hero
