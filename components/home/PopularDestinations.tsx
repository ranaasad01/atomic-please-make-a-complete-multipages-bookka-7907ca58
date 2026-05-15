"use client";

import Link from 'next/link';
import { MapPin, Plane, Building2, ArrowRight } from 'lucide-react';
import { popularDestinations } from '@/lib/mock-data';

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">Explore top travel destinations with the best deals</p>
          </div>
          <Link href="/flights" className="hidden md:flex items-center gap-1 text-[#FF6B35] font-semibold hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map(function(dest) {
            return (
              <Link key={dest.id} href="/flights" className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 block">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.city + ', ' + dest.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent" />
                  {dest.tag && (
                    <div className="absolute top-3 left-3 badge-orange">{dest.tag}</div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span className="text-xs text-gray-300">{dest.country}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{dest.city}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>From PKR {dest.flightPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>From PKR {dest.hotelPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/flights" className="btn-secondary inline-flex items-center gap-2">
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
