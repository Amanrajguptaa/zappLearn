export default function NavBar() {
    return (
        <nav className=" w-full absolute">
            <div className="w-full mx-auto py-4 px-22 ">
                <div className="w-full flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-blue-600">KnowledgePulse</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex  items-baseline space-x-12">
                            <a href="/" className="text-neutral-900 hover:bg-white/20 px-3 py-2 rounded-full  font-medium">Home</a>
                            <a href="/courses" className="text-neutral-900 hover:bg-white/20 px-3 py-2 rounded-full  font-medium">Our Courses</a>
                            <a href="/about" className="text-neutral-900 hover:bg-white/20 px-3 py-2 rounded-full  font-medium">About Us</a>
                            <a href="/contact" className="text-neutral-900 hover:bg-white/20 px-3 py-2 rounded-full  font-medium">Contact</a>
                        </div>
                    </div>
                    <div className="flex gap-2 rounded-full border border-neutral-200 px-4 py-2">
                        <button className="">Register Now</button>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}