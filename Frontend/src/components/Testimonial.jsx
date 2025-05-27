import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonial = () => {


  const courses = [    {
      id: 1,
      image: '/api/placeholder/280/160',
      instructor: {
        name: 'Theresa Webb',
        role: 'UX/UI designer',
        avatar: '/api/placeholder/40/40'
      },
      title: 'Google UX/UI Analytics',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviews: '44k reviews'
    },
    {
      id: 2,
      image: '/api/placeholder/280/160',
      instructor: {
        name: 'Theresa Webb',
        role: 'UX/UI designer',
        avatar: '/api/placeholder/40/40'
      },
      title: 'Google UX/UI Analytics',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviews: '44k reviews'
    },
    {
      id: 3,
      image: '/api/placeholder/280/160',
      instructor: {
        name: 'Theresa Webb',
        role: 'UX/UI designer',
        avatar: '/api/placeholder/40/40'
      },
      title: 'Google UX/UI Analytics',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviews: '44k reviews'
    },
    {
      id: 4,
      image: '/api/placeholder/280/160',
      instructor: {
        name: 'Theresa Webb',
        role: 'UX/UI designer',
        avatar: '/api/placeholder/40/40'
      },
      title: 'Google UX/UI Analytics',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviews: '44k reviews'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              This is what our users <br />
              feel about us ❤️
            </h2>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-[#9BBCFF] rounded-full opacity-30"></div>
          </div>
        </div>


        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative h-40 bg-gray-200">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {course.instructor.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {course.instructor.role}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 mr-1">
                      {course.rating}
                    </span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                    <span className="text-sm text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;