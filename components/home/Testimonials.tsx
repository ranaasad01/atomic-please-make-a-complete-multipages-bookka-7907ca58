"use client";

import { Star } from 'lucide-react';
import { testimonials } from '@/lib/mock-data';

const typeLabels: Record<string, string> = {
  flight: '✈️ Flight',
  bus: '🚌 Bus',
  car: '🚗 Car Rental',
  hotel: '🏨 Hotel',
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real reviews from real travelers who booked with BookKaru</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(function(testimonial) {
            return (
              <div key={testimonial.id} className="card p-6 flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B35]/20"
                  />
                  <div>
                    <div className="font-semibold text-[#1A1A2E] text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map(function(_, i) {
                    return (
                      <Star
                        key={i}
                        className={'w-4 h-4 ' + (i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200')}
                      />
                    );
                  })}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                    {typeLabels[testimonial.travelType]}
                  </span>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-gradient-to-r from-[#FF6B35] to-[#E55A24] rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading font-bold text-2xl mb-2">Join 2 Million+ Happy Travelers</h3>
          <p className="text-orange-100 mb-6">Start your journey with BookKaru today and experience travel like never before.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 rounded-xl px-6 py-3">
              <div className="font-bold text-2xl">4.8/5</div>
              <div className="text-orange-100 text-sm">Average Rating</div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3">
              <div className="font-bold text-2xl">50K+</div>
              <div className="text-orange-100 text-sm">Reviews</div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3">
              <div className="font-bold text-2xl">98%</div>
              <div className="text-orange-100 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
