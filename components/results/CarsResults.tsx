'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Car, Star, Filter, ArrowRight, Users, Fuel, Settings } from 'lucide-react';
import { mockCars } from '@/lib/mock-data';
import type { Car as CarType } from '@/lib/types';

const carTypes = ['All', 'Sedan', 'SUV', 'Hatchback', 'Luxury'];

export default function CarsResults() {
  const [sortBy, setSortBy] = useState('price');
  const [maxPrice, setMaxPrice] = useState(25000);
  const [typeFilter, setTypeFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = mockCars
    .filter(function(c) {
      if (c.pricePerDay > maxPrice) return false;
      if (typeFilter !== 'All' && c.type !== typeFilter) return false;
      return true;
    })
    .sort(function(a, b) {
      if (sortBy === 'price') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-[#1A1A2E] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-2xl font-bold text-white mb-1">Available Cars</h1>
          <p className="text-gray-400 text-sm">Karachi Airport · 20 Jan – 23 Jan 2025 · 3 Days</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-white/10 text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <Car className="w-4 h-4 text-[#FF6B35]" />
              {filtered.length} cars available
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="md:hidden bg-[#FF6B35] text-white text-sm px-4 py-2 rounded-xl flex items-center gap-2">
              <Filter className="w-4 h-4" />Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <aside className={['w-72 flex-shrink-0', showFilters ? 'block' : 'hidden md:block'].join(' ')}>
            <div className="card p-5 sticky top-24">
              <h3 className="font-heading font-semibold text-[#1A1A2E] mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF6B35]" />Filters
              </h3>
              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Max Price/Day: PKR {maxPrice.toLocaleString()}</label>
                <input type="range" min={2000} max={25000} step={500} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#FF6B35]" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>PKR 2,000</span><span>PKR 25,000</span></div>
              </div>
              <div className="mb-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Car Type</label>
                <div className="space-y-2">
                  {carTypes.map(function(type) {
                    return (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="carType" checked={typeFilter === type} onChange={() => setTypeFilter(type)} className="accent-[#FF6B35]" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <button onClick={() => { setMaxPrice(25000); setTypeFilter('All'); setSortBy('price'); }} className="w-full text-sm text-[#FF6B35] font-medium hover:underline">
                Clear All Filters
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="card p-4 flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">{filtered.length} results</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                <option value="price">Lowest Price</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {filtered.length === 0 && (
              <div className="card p-12 text-center">
                <Car className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-gray-500 text-lg">No cars found</h3>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map(function(car) { return <CarCard key={car.id} car={car} />; })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarCard({ car }: { car: CarType }) {
  const discount = car.originalPrice
    ? Math.round(((car.originalPrice - car.pricePerDay) / car.originalPrice) * 100)
    : null;

  return (
    <div className="card overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-44 overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="badge-navy">{car.type}</span>
          {discount && <span className="badge-orange">{discount}% OFF</span>}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading font-bold text-[#1A1A2E]">{car.name}</h3>
            <p className="text-gray-400 text-sm">{car.brand} · {car.pickupLocation}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{car.rating}</span>
            <span className="text-xs text-gray-400">({car.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1"><Users className="w-4 h-4" />{car.seats} seats</div>
          <div className="flex items-center gap-1"><Settings className="w-4 h-4" />{car.transmission}</div>
          <div className="flex items-center gap-1"><Fuel className="w-4 h-4" />{car.fuelType}</div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {car.features.slice(0, 3).map(function(f) {
            return <span key={f} className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-100">{f}</span>;
          })}
        </div>

        <div className="flex items-center justify-between">
          <div>
            {car.originalPrice && <div className="text-xs text-gray-400 line-through">PKR {car.originalPrice.toLocaleString()}/day</div>}
            <div className="font-heading font-bold text-lg text-[#FF6B35]">PKR {car.pricePerDay.toLocaleString()}<span className="text-sm font-normal text-gray-400">/day</span></div>
          </div>
          <Link href={'/booking/' + car.id} className="btn-primary text-sm px-4 py-2 flex items-center gap-1">
            Rent Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
