'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bus, Clock, Wifi, Star, Filter, ArrowRight, MapPin, Zap } from 'lucide-react';
import { mockBuses } from '@/lib/mock-data';
import type { Bus as BusType } from '@/lib/types';

export default function BusesResults() {
  const [sortBy, setSortBy] = useState('price');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = mockBuses
    .filter(function(b) { return b.price <= maxPrice; })
    .sort(function(a, b) {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-[#1A1A2E] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl font-bold text-white mb-1">Available Buses</h1>
          <p className="text-gray-400 text-sm">Lahore → Islamabad · Mon, 20 Jan 2025</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-white/10 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <Bus className="w-4 h-4 text-[#FF6B35]" />
              {filtered.length} buses found
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden bg-[#FF6B35] text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <aside className={['w-72 flex-shrink-0', showFilters ? 'block' : 'hidden md:block'].join(' ')}>
            <div className="card p-5 sticky top-24">
              <h3 className="font-heading font-semibold text-[#1A1A2E] mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF6B35]" />
                Filters
              </h3>
              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Max Price: PKR {maxPrice.toLocaleString()}</label>
                <input type="range" min={500} max={5000} step={100} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#FF6B35]" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>PKR 500</span><span>PKR 5,000</span>
                </div>
              </div>
              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Sort By</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-field text-sm">
                  <option value="price">Lowest Price</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              <button onClick={() => { setMaxPrice(5000); setSortBy('price'); }} className="w-full text-sm text-[#FF6B35] font-medium hover:underline">
                Clear All Filters
              </button>
            </div>
          </aside>

          <div className="flex-1 space-y-4">
            <div className="card p-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">{filtered.length} results</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                <option value="price">Lowest Price</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {filtered.length === 0 && (
              <div className="card p-12 text-center">
                <Bus className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-gray-500 text-lg">No buses found</h3>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
              </div>
            )}

            {filtered.map(function(bus) { return <BusCard key={bus.id} bus={bus} />; })}
          </div>
        </div>
      </div>
    </div>
  );
}

function BusCard({ bus }: { bus: BusType }) {
  const discount = bus.originalPrice
    ? Math.round(((bus.originalPrice - bus.price) / bus.originalPrice) * 100)
    : null;

  return (
    <div className="card p-5 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-3 md:w-44">
          <div className="w-10 h-10 bg-[#1A1A2E] rounded-xl flex items-center justify-center flex-shrink-0">
            <Bus className="w-5 h-5 text-[#FF6B35]" />
          </div>
          <div>
            <div className="font-semibold text-sm text-[#1A1A2E]">{bus.operator}</div>
            <div className="text-xs text-gray-400">{bus.busType}</div>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-4">
          <div className="text-center">
            <div className="font-heading font-bold text-xl text-[#1A1A2E]">{bus.departureTime}</div>
            <div className="text-xs text-gray-400">{bus.origin}</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-xs text-gray-400 mb-1">{bus.duration}</div>
            <div className="w-full flex items-center gap-1">
              <div className="flex-1 h-px bg-gray-200" />
              <Bus className="w-4 h-4 text-[#FF6B35]" />
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-xl text-[#1A1A2E]">{bus.arrivalTime}</div>
            <div className="text-xs text-gray-400">{bus.destination}</div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-1 text-xs text-gray-500">
          <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#FF6B35]" />{bus.boardingPoint}</div>
          <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" />{bus.droppingPoint}</div>
        </div>

        <div className="flex items-center gap-1 md:w-16">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{bus.rating}</span>
        </div>

        <div className="flex flex-col items-end gap-2 md:w-40">
          {discount && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 line-through">PKR {bus.originalPrice?.toLocaleString()}</span>
              <span className="badge-orange text-xs">{discount}% OFF</span>
            </div>
          )}
          <div className="font-heading font-bold text-xl text-[#FF6B35]">PKR {bus.price.toLocaleString()}</div>
          <div className="text-xs text-gray-400">{bus.seatsLeft} seats left</div>
          <Link href={'/booking/' + bus.id} className="btn-primary text-sm px-5 py-2 flex items-center gap-1">
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
        {bus.amenities.map(function(amenity) {
          return (
            <span key={amenity} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
              {amenity}
            </span>
          );
        })}
      </div>
    </div>
  );
}
