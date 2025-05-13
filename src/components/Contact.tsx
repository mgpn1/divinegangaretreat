
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Reach out to us for reservations, inquiries, or special requests. We're here to make your stay perfect.</p>
          <div className="w-20 h-1 bg-hotel-green mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.683620458259!2d78.321684!3d30.108485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e524d97cbbd%3A0xbcd675374eb6c4ce!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1682702456123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing location of Divine Ganga Retreat"
                ></iframe>
              </CardContent>
            </Card>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-hotel-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">143 Swarg Ashram Road, Near Laxman Jhula<br />Rishikesh, Uttarakhand 249302<br />India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-hotel-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 13579 24680</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-hotel-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@divinegangaretreat.com</p>
                  <p className="text-gray-600">reservations@divinegangaretreat.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-hotel-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-800">Hours</h3>
                  <p className="text-gray-600">Check-in: 2:00 PM</p>
                  <p className="text-gray-600">Check-out: 11:00 AM</p>
                  <p className="text-gray-600">Front Desk: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-hotel-beige rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input id="name" className="w-full" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" className="w-full" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" className="w-full" placeholder="Reservation Inquiry" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <Textarea id="message" className="w-full min-h-[150px]" placeholder="How can we help you?" />
              </div>
              
              <Button type="submit" className="w-full bg-hotel-green text-white hover:bg-opacity-90 py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
