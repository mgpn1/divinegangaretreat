
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Experience Divine Tranquility by the Sacred Ganges
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nestled along the sacred shores of the Ganges River, our retreat offers a perfect blend of luxury, spirituality, and natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-hotel-green text-white hover:bg-opacity-90 text-lg py-6 px-8">
              Book Your Stay
            </Button>
            <Button className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm text-lg py-6 px-8 border border-white/30">
              Explore Our Rooms
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4 pb-6">
          <div className="bg-white rounded-t-lg shadow-lg p-6 sm:p-8 booking-form max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-hotel-green focus:border-hotel-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <input 
                  type="date" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-hotel-green focus:border-hotel-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-hotel-green focus:border-hotel-green">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-hotel-green text-white hover:bg-opacity-90 py-2">
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
