import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import {DocumentContext} from '../../context/Provider';
import { useContext } from 'react';

const ImportDialog = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { isOpenUploadBox, setIsOpenUploadBox } = useContext(DocumentContext);

  if (!isOpenUploadBox) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-96 max-w-90vw">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center ga-2 text-lg font-semibold text-gray-800">
            <Upload className="w-5 h-5 mr-2 text-purple-600" />
            Notes Upload</h3>
          <button
            onClick={() => setIsOpenUploadBox(false)}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            x
          </button>
        </div>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${isDragging
            ? 'border-purple-400 bg-purple-50'
            : 'border-gray-300 bg-gray-50 hover:border-purple-300 hover:bg-purple-25'
            }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={() => setIsDragging(false)}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Drop your notes here or</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Browse Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportDialog;

