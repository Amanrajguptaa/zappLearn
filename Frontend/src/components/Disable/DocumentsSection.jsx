import React, { useState } from 'react';
import { FileText, Volume2, BookOpen, Brain, Play, ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import {DocumentContext} from '../../context/Provider';

const DocumentsSection = () => {
    const [activeTab, setActiveTab] = useState('documents');
    const [dylexiaMode, setDylexiaMode] = useState(false);
    const { isOpenUploadBox, setIsOpenUploadBox } = useContext(DocumentContext);
    
    return (
      <div className= "w-full ">
        <div className="py-5 border-b border-gray-200 pr-20">
          <div className="flex items-center justify-end ">
            <div className="flex gap-2">
              <button
                onClick={() => setDylexiaMode(!dylexiaMode)}
                className={`px-3 py-3 rounded-full text-sm transition-colors duration-200 ${
                  dylexiaMode 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                }`}
              >
                Dyslexia Mode
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm transition-colors duration-200"
              onClick={()=> setIsOpenUploadBox(true)}
              >
                Upload Document
              </button>
            </div>
          </div>
        </div>
        
        <div className="px-16 py-12">
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <Volume2 className="w-4 h-4 mr-2 text-purple-600" />
              Audio Summary
            </h4>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Chapter 1 Summary</span>
                <span className="text-xs text-gray-500">5:32</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200">
                  <Play className="w-4 h-4" />
                </button>
                <div className="flex-1 bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-purple-600" />
              Document Summary
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                  Introduction to fundamental physics concepts
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                  Newton's laws of motion explained
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                  Practical applications and examples
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                  Key formulas and calculations
                </li>
              </ol>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <Brain className="w-4 h-4 mr-2 text-purple-600" />
              Start Quizzes
            </h4>
            <div className="grid gap-3">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-4 rounded-lg text-left transition-all duration-200 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium mb-1">Chapter 1 Quiz</h5>
                    <p className="text-purple-100 text-sm">10 questions • 15 minutes</p>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
              <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white p-4 rounded-lg text-left transition-all duration-200 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium mb-1">Practice Test</h5>
                    <p className="text-gray-100 text-sm">25 questions • 30 minutes</p>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DocumentsSection;
