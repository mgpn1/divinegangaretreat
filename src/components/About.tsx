
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Welcome to Divine Ganga Retreat</h2>
            <div className="w-20 h-1 bg-hotel-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-6">Our Sanctuary in the Himalayas</h3>
              <p className="text-gray-600 mb-6">
                Nestled on the banks of the sacred Ganga River with panoramic views of the Himalayan foothills, Divine Ganga Retreat offers a unique blend of traditional Indian hospitality and modern luxury. Our property is a sanctuary for those seeking spiritual renewal, adventure, or simply a peaceful escape.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2005, our retreat has welcomed guests from over 50 countries who come to experience the magic of Rishikesh—the yoga capital of the world. Just a short walk from the famous Laxman Jhula bridge and within reach of ancient temples and ashrams, our location offers the perfect base to explore this spiritual hub.
              </p>
              <p className="text-gray-600 mb-6">
                Our rooms, designed with a perfect blend of traditional aesthetics and contemporary comfort, provide a serene sanctuary after a day of exploration or meditation. Each morning, wake up to the gentle sounds of temple bells and the flowing Ganges.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-hotel-beige rounded-lg p-4 flex items-center min-w-[140px]">
                  <div className="mr-3 text-hotel-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wifi"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>
                  </div>
                  <span className="font-medium text-gray-700">Free WiFi</span>
                </div>
                <div className="bg-hotel-beige rounded-lg p-4 flex items-center min-w-[140px]">
                  <div className="mr-3 text-hotel-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <span className="font-medium text-gray-700">Yoga Classes</span>
                </div>
                <div className="bg-hotel-beige rounded-lg p-4 flex items-center min-w-[140px]">
                  <div className="mr-3 text-hotel-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"/></svg>
                  </div>
                  <span className="font-medium text-gray-700">Restaurant</span>
                </div>
                <div className="bg-hotel-beige rounded-lg p-4 flex items-center min-w-[140px]">
                  <div className="mr-3 text-hotel-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/></svg>
                  </div>
                  <span className="font-medium text-gray-700">River View</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
                  alt="View from Divine Ganga Retreat" 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80" 
                  alt="Nature around Divine Ganga Retreat" 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600&q=80" 
                  alt="Activities at Divine Ganga Retreat" 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                  alt="Room at Divine Ganga Retreat" 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
