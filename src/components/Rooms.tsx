
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roomTypes = [
  {
    name: "Ganga View Deluxe Room",
    description: "Experience the divine beauty of the sacred Ganges from your private balcony. These spacious rooms feature traditional décor with modern amenities.",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    features: ["River View", "King Size Bed", "Free WiFi", "Air Conditioning", "En-suite Bathroom"]
  },
  {
    name: "Himalayan Suite",
    description: "Our premium suites offer panoramic views of the Himalayan foothills and the sacred river, featuring a separate living area and luxurious amenities.",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    features: ["Mountain & River View", "Living Room", "Premium Bath Amenities", "Yoga Mat", "Mini Refrigerator"]
  },
  {
    name: "Garden Cottage",
    description: "Nestled in our tranquil garden, these private cottages offer a peaceful retreat with traditional architecture and modern comforts.",
    price: "₹7,800",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    features: ["Private Garden", "Queen Size Bed", "Outdoor Seating", "Tea/Coffee Maker", "Daily Housekeeping"]
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-hotel-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of traditional aesthetics and modern comfort in our thoughtfully designed rooms and suites.</p>
          <div className="w-20 h-1 bg-hotel-green mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-800">{room.name}</h3>
                  <div className="text-hotel-green font-bold text-lg">{room.price}<span className="text-sm text-gray-500 font-normal"> / night</span></div>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Room Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-hotel-green" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-hotel-green text-white hover:bg-opacity-90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-hotel-green text-hotel-green hover:bg-hotel-green hover:text-white">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
