import React from 'react';
import VidIcon from '../assets/video.png'
import NoteIcon from '../assets/sticky-notes.png';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-50 p-6 flex items-center justify-center h-screen gap-12">
            <div className='w-1/3 flex flex-col gap-2 justify-center p-8 border border-neutral-400 rounded-xl cursor-pointer'
            onClick={()=>navigate('/disable/videos')}>
                <img src={VidIcon} alt="Video Icon" className='w-16 h-16 mb-4' />   
                <h1 className='font-bold text-xl'>Video</h1>
                <p  className='text-lg'>Watch videos here. You can upload your videos and share them with others.</p>
            </div>

            <div className='w-1/3 flex flex-col gap-2 justify-center p-8 border border-neutral-400 rounded-xl cursor-pointer'
            onClick={()=>navigate('/disable/notes')}>
                <img src={NoteIcon} alt="Notes Icon" className='w-16 h-16 mb-4' />
                <h1 className='font-bold text-xl'>Notes</h1>
                <p className='text-lg'>Get your notes here. You can upload your notes and share them with others.</p>
            </div>
        </div>
    );
};

export default App;


// import VideoPlayerSection from './../components/VideoPlayerSection';
// import NotesUploadSection from './../components/NotesUploadSection';
// import SignLanguageSection from './../components/SignLanguageSection';
// import CommentsSection from './../components/CommentsSection';
// import DocumentsSection from './../components/DocumentsSection';
// import ImportDialog from './../components/ImportDialog';
// import { Upload } from 'lucide-react';


// const App = () => {
//     const [showImportDialog, setShowImportDialog] = useState(false);
    
//     return (
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">Physics Wallah</h1>
//             <p className="text-gray-600">Interactive Learning Platform</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             <div className="lg:col-span-2 space-y-6">
//               <VideoPlayerSection />
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <NotesUploadSection />
//                 <SignLanguageSection />
//               </div>
//             </div>
//             <div className="space-y-6">
//               <CommentsSection />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
//             <DocumentsSection />
//           </div>
          
//           <div className="mt-8 text-center">
//             <button 
//               onClick={() => setShowImportDialog(true)}
//               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
//             >
//               <Upload className="w-5 h-5" />
//               Show Import Dialog Demo
//             </button>
//           </div>
          
//           {showImportDialog && <ImportDialog />}
//         </div>
//       </div>
//     );
//   };
  
//   export default App;