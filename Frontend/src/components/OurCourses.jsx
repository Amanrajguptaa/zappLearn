import { Search } from "lucide-react";
import bg from '../assets/Backgroudn Gradient (2).png'
export default function OurCourses() {
    return (
        <div className="flex flex-col border rounded-md border-neutral-200 justify-center items-center h-96">
            <img src={bg}></img>
            <p className="">KNOWLEDGEPULSE</p>
            <h1 className="text-6xl font-bold">Our Courses</h1>
            <p>This platform's simplicity belies its powerful capabilities, offering a seamless and enjoyable educational expirience.</p>
            <div className='w-2xl flex gap-3'>
                <div className='flex-1'>
                    <div className='flex items-center gap-3 px-6 border border-neutral-300 rounded-full'>
                        <Search size={20} strokeWidth={2} className='text-primary ' />
                        <input className='w-full px-2 py-4  focus:outline-none' placeholder='Courses...' ></input>
                    </div>
                </div>
                <button className='w-fit bg-blue rounded-full text-white px-12 py-4'>Search</button>
            </div>
        </div>
    );
}

