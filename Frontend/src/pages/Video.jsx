import React from 'react';
import CommentsSection from '../components/Disable/CommentsSection';
import VideoPlayerSection from '../components/Disable/VideoPlayerSection';
import SignLanguageSection from '../components/Disable/SignLanguageSection';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Video() {

    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 px-20">
            <div className='w-full flex items-center justify-between py-4'>
                <button className='flex items-center gap-1 text-lg font-semibold cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200'
                 onClick={()=>navigate('/disable')}>
                    <ChevronLeft strokeWidth={3} size={20}/>
                    Back
                    </button>
                {/* <h1 className="text-2xl font-bold text-gray-800">Video Player</h1> */}
            </div>
            <div className='w-full flex gap-2'>
                <VideoPlayerSection />
                <SignLanguageSection />
            </div>
            <CommentsSection />
        </div>
    );
}