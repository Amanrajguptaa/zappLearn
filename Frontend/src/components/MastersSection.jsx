import React, { useState } from 'react';

const MastersSection = () => {
  const [activeTab, setActiveTab] = useState('UI Designer');

  const categories = [
    { id: 'developer', label: 'Developer', icon: '👨‍💻' },
    { id: 'ui-designer', label: 'UI Designer', icon: '🎨' },
    { id: 'designer', label: 'Designer', icon: '✨' },
    { id: 'accountant', label: 'Accountant', icon: '💰' },
    { id: 'human-resource', label: 'Human Resource', icon: '👥' },
    { id: 'marketing', label: 'Marketing', icon: '📈' }
  ];

  const profiles = [
    {
      id: 1,
      name: 'Zrand Hobs',
      role: 'Developer',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      skills: ['Gimp', 'Wordpress'],
      isOnline: true
    },
    {
      id: 2,
      name: 'Dorothy Wood',
      role: 'Teacher',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      skills: ['Elementor', 'Wix', 'Illustrator'],
      isOnline: true,
      isHighlighted: false
    },
    {
      id: 3,
      name: 'Timothy Baker',
      role: 'Teacher',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      skills: ['Figma', 'Elementor', 'Wordpress'],
      isOnline: true
    },
    {
      id: 4,
      name: 'Shane Pratt',
      role: 'Developer',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      skills: ['Figma', 'Wordpress', 'Gimp'],
      isOnline: true
    },
    {
      id: 5,
      name: 'Frances Washing',
      role: 'Developer',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      skills: ['Wordpress', 'Wix', 'Illustrator'],
      isOnline: false
    },
    {
      id: 6,
      name: 'Jason Bell',
      role: 'Web Designer',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      skills: ['Elementor', 'Wordpress'],
      isOnline: true
    },
    {
      id: 7,
      name: 'Kathryn Sanchez',
      role: 'Teacher',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      skills: ['Framer', 'Webflow', 'Wix'],
      isOnline: false
    },
    {
      id: 8,
      name: 'Jaime Strickland',
      role: 'Web Designer',
      rating: 4.8,
      reviews: 6,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      skills: ['Gimp', 'Figma', 'Webflow'],
      isOnline: false
    }
  ];

  return (
    <div className="my-10 max-w-6xl mx-auto">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover the<br />
            Emerging Masters
          </h1>
          <p className="text-gray-600 text-lg">
            Find the best master for your company and boosts<br />
            your business 10x!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.label)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === category.label
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                profile.isHighlighted ? 'ring-2 ring-blue-300 bg-blue-50' : ''
              }`}
            >
              <div className="relative mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
                {profile.isOnline && (
                  <div className="absolute bottom-0 right-1/2 transform translate-x-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex items-center justify-center gap-1 mb-3">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold text-gray-900">{profile.rating}</span>
                <span className="text-gray-500 text-sm">({profile.reviews})</span>
              </div>

              <div className="text-center mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{profile.name}</h3>
                <p className="text-gray-600 text-sm">{profile.role}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            View All
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default MastersSection;