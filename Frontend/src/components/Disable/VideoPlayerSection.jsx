import React, { useState } from 'react';
import { Play, Upload, MessageCircle, Plus, BookOpen, Brain, FileText, Volume2, ChevronRight, Clock, User, Calendar } from 'lucide-react';

const VideoPlayerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="aspect-video bg-gradient-to-br from-purple-100 to-gray-100 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          <Play className="w-8 h-8 ml-1" />
        </button>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          <Clock className="w-4 h-4 inline mr-1" />
          12:45
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Introduction to Physics</h3>
      <p className="text-gray-600 text-sm">Chapter 1: Basic Concepts and Fundamentals</p>
    </div>
  );
};

export default VideoPlayerSection;