
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Divine Ganga Retreat</h3>
            <p className="mb-4 text-gray-400">Experience the perfect blend of luxury, spirituality, and natural beauty along the sacred shores of the Ganges River.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Accommodations</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Special Offers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reservation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for special offers and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-hotel-green"
              />
              <button type="submit" className="bg-hotel-green text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-hotel-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Divine Ganga Retreat. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <img src="https://via.placeholder.com/200x30/718096/FFFFFF?text=Payment+Methods" alt="Payment Methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
