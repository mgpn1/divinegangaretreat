
import React from 'react';
import { Button } from "@/components/ui/button";

const amenities = [
  {
    name: "Yoga & Meditation",
    description: "Daily yoga sessions conducted by experienced instructors on our panoramic yoga deck overlooking the Ganges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
  },
  {
    name: "Ayurvedic Spa",
    description: "Rejuvenate with traditional Ayurvedic treatments and massages using authentic herbs and techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bed"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
    )
  },
  {
    name: "Organic Restaurant",
    description: "Savor delicious vegetarian and vegan meals prepared with locally sourced organic ingredients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"/></svg>
    )
  },
  {
    name: "Ganga Aarti",
    description: "Experience the magical evening ritual of Ganga Aarti from our private viewing deck with spiritual guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
  },
  {
    name: "Adventure Activities",
    description: "Enjoy white water rafting, trekking, and mountain biking excursions arranged by our experienced team.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mountain-snow"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/></svg>
    )
  },
  {
    name: "Cultural Programs",
    description: "Weekly cultural performances featuring traditional music, dance, and spiritual discourse by local artists.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    )
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Experience Our Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover a world of comfort, wellness, and adventure at Divine Ganga Retreat.</p>
          <div className="w-20 h-1 bg-hotel-green mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-hotel-beige rounded-lg p-6 transition duration-300 hover:shadow-lg">
              <div className="text-hotel-green mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{amenity.name}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-hotel-light-blue rounded-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Special Retreat Packages</h3>
              <p className="text-gray-600 mb-6">Enhance your stay with our specially curated packages designed for wellness, spiritual growth, and adventure.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-hotel-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong>Yoga Retreat:</strong> 7-day immersive yoga experience with meditation sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-hotel-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong>Ayurvedic Detox:</strong> 5-day wellness program with specialized treatments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-hotel-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong>Spiritual Journey:</strong> 3-day package with temple visits and spiritual discourse</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-hotel-green mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600"><strong>Adventure Package:</strong> Rafting, trekking, and camping experiences</span>
                </li>
              </ul>
              <Button className="bg-hotel-green text-white hover:bg-opacity-90">
                View Packages
              </Button>
            </div>
            <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
