
import React from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    alt: "Ganges River View from Divine Ganga Retreat",
    caption: "Spectacular views of the sacred Ganges River"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    alt: "Lush garden at Divine Ganga Retreat",
    caption: "Our tranquil garden sanctuary"
  },
  {
    src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    alt: "Yoga class at Divine Ganga Retreat",
    caption: "Daily yoga sessions with expert instructors"
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury suite at Divine Ganga Retreat",
    caption: "Elegant and comfortable accommodations"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Sunset over the mountains from Divine Ganga Retreat",
    caption: "Breathtaking sunset views"
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80&ar=4:3",
    alt: "Morning view of the Ganges from Divine Ganga Retreat",
    caption: "Serene mornings by the river"
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-hotel-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Glimpses of Divine Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Immerse yourself in the beauty and tranquility of our riverside retreat through these captivating images.</p>
          <div className="w-20 h-1 bg-hotel-green mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-8 md:p-12 bg-hotel-blue rounded-lg max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">Experience the Divine in Every Moment</h3>
            <p className="mb-6">Join us for an unforgettable stay where every detail is crafted to elevate your experience. From stunning views to personalized service, we've created a sanctuary for your body, mind, and soul.</p>
            <button className="bg-white text-hotel-green hover:bg-hotel-beige font-medium py-2 px-6 rounded-md transition duration-300">
              Book Your Divine Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
