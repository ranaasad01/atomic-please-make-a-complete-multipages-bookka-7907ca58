'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plane, Clock, Wifi, Utensils, Zap, Star, Filter, ChevronDown, ArrowRight, Users } from 'lucide-react';
import { mockFlights } from '@/lib/mock-data';
import type { Flight } from '@/lib/types';

export default function FlightsResults() {
  const [sortBy, setSortBy] = useState('price');
  const [maxPrice, setMaxPrice] = useState(100000);
  const [stopsFilter, setStopsFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = mockFlights
    .filter(function(f) {
      if (f.price > maxPrice) return false;
      if (stopsFilter !== null && f.stops !== stopsFilter) return false;
      return true;
    })
    .sort(function(a, b) {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1A1A2E] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl font-bold text-white mb-1">Available Flights</h1>
          <p className="text-gray-400 text-sm">Karachi → Lahore · Mon, 20 Jan 2025 · 1 Passenger</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-white/10 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#FF6B35]" />
              {filtered.length} flights found
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
          {/* Filters Sidebar */}
          <aside className={[
            'w-72 flex-shrink-0',
            showFilters ? 'block' : 'hidden md:block',
          ].join(' ')}>
            <div className="card p-5 sticky top-24">
              <h3 className="font-heading font-semibold text-[#1A1A2E] mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF6B35]" />
                Filters
              </h3>

              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Max Price: PKR {maxPrice.toLocaleString()}</label>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={1000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#FF6B35]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>PKR 5,000</span>
                  <span>PKR 1,00,000</span>
                </div>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Stops</label>
                <div className="space-y-2">
                  {[
                    { label: 'Any', value: null },
                    { label: 'Non-stop', value: 0 },
                    { label: '1 Stop', value: 1 },
                  ].map(function(opt) {
                    return (
                      <label key={String(opt.value)} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="stops"
                          checked={stopsFilter === opt.value}
                          onChange={() => setStopsFilter(opt.value)}
                          className="accent-[#FF6B35]"
                        />
                        <span className="text-sm text-gray-600">{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field text-sm"
                >
                  <option value="price">Lowest Price</option>
                  <option value="duration">Shortest Duration</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <button
                onClick={() => { setMaxPrice(100000); setStopsFilter(null); setSortBy('price'); }}
                className="w-full text-sm text-[#FF6B35] font-medium hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 space-y-4">
            {/* Sort Bar */}
            <div className="card p-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">{filtered.length} results</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                >
                  <option value="price">Lowest Price</option>
                  <option value="duration">Shortest Duration</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="card p-12 text-center">
                <Plane className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-gray-500 text-lg">No flights found</h3>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
              </div>
            )}

            {filtered.map(function(flight) {
              return <FlightCard key={flight.id} flight={flight} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlightCard({ flight }: { flight: Flight }) {
  const discount = flight.originalPrice
    ? Math.round(((flight.originalPrice - flight.price) / flight.originalPrice) * 100)
    : null;

  return (
    <div className="card p-5 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Airline */}
        <div className="flex items-center gap-3 md:w-40">
          <div className="w-10 h-10 bg-[#1A1A2E] rounded-xl flex items-center justify-center flex-shrink-0">
            <Plane className="w-5 h-5 text-[#FF6B35]" />
          </div>
          <div>
            <div className="font-semibold text-sm text-[#1A1A2E]">{flight.airline}</div>
            <div className="text-xs text-gray-400">{flight.flightNumber}</div>
          </div>
        </div>

        {/* Route */}
        <div className="flex-1 flex items-center gap-4">
          <div className="text-center">
            <div className="font-heading font-bold text-xl text-[#1A1A2E]">{flight.departureTime}</div>
            <div className="text-xs text-gray-500">{flight.originCode}</div>
            <div className="text-xs text-gray-400">{flight.origin}</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-xs text-gray-400 mb-1">{flight.duration}</div>
            <div className="w-full flex items-center gap-1">
              <div className="flex-1 h-px bg-gray-200" />
              <Plane className="w-4 h-4 text-[#FF6B35]" />
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {flight.stops === 0 ? 'Non-stop' : flight.stops + ' stop'}
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-xl text-[#1A1A2E]">{flight.arrivalTime}</div>
            <div className="text-xs text-gray-500">{flight.destinationCode}</div>
            <div className="text-xs text-gray-400">{flight.destination}</div>
          </div>
        </div>

        {/* Amenities */}
        <div className="hidden lg:flex items-center gap-2">
          {flight.amenities.includes('WiFi') && (
            <span title="WiFi">
              <Wifi className="w-4 h-4 text-gray-400" />
            </span>
          )}
          {flight.amenities.includes('Meal') && (
            <span title="Meal">
              <Utensils className="w-4 h-4 text-gray-400" />
            </span>
          )}
          {flight.amenities.includes('USB Charging') && (
            <span title="USB Charging">
              <Zap className="w-4 h-4 text-gray-400" />
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 md:w-16">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{flight.rating}</span>
        </div>

        {/* Price & CTA */}
        <div className="flex flex-col items-end gap-2 md:w-40">
          {discount && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 line-through">PKR {flight.originalPrice?.toLocaleString()}</span>
              <span className="badge-orange text-xs">{discount}% OFF</span>
            </div>
          )}
          <div className="font-heading font-bold text-xl text-[#FF6B35]">
            PKR {flight.price.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">{flight.class} · {flight.seatsLeft} seats left</div>
          <Link
            href={'/booking/' + flight.id}
            className="btn-primary text-sm px-5 py-2 flex items-center gap-1"
          >
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
