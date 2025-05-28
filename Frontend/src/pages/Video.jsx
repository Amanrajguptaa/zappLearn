export default function Video() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-neutral-900">Video Section</h1>
            <p className="text-neutral-600">This is the video section where you can watch educational videos.</p>
            <a href="/" className="text-blue-600 hover:underline">Go back to Home</a>
        </div>
    );
}