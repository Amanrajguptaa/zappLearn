import React from 'react';
import { User } from 'lucide-react';

const SignLanguageSection = () => {
    return (
      <div className="w-lg bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-purple-600" />
          Sign Language
        </h3>
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-gray-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <User className="w-16 h-16 text-purple-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Sign Language Interpreter</p>
          </div>
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
          Enable Sign Language
        </button>
      </div>
    );
  };


export default SignLanguageSection ;