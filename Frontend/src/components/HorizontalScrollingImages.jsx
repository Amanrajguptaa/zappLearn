import React from "react";

const HorizontalScrollingImages = () => {

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop',
  ];

  return (
    <div className="">
      <div className="overflow-clip max-w-screen">
        {/* Scrolling Images */}
        <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20">
          <div
            className={'flex gap-6 animate-scroll '}
          >
            {/* Duplicate images for seamless loop */}
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="w-64 h-84 object-cover rounded-xl flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollingImages;