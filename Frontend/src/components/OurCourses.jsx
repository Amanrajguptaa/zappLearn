import { Search } from "lucide-react";
export default function OurCourses() {
    return (
        <div className="flex justify-center items-center h-screen">
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

