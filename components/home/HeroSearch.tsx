'use client';

import { useState } from 'react';
import { Plane, Bus, Car, Building2, Search, MapPin, Calendar, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

type TabType = 'flights' | 'buses' | 'cars' | 'hotels';

interface Tab {
  id: TabType;
  label: string;
  icon: React.ElementType;
}

const tabs: Tab[] = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'buses', label: 'Buses', icon: Bus },
  { id: 'cars', label: 'Cars', icon: Car },
  { id: 'hotels', label: 'Hotels', icon: Building2 },
];

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<TabType>('flights');
  const [tripType, setTripType] = useState('one-way');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/' + activeTab);
  };

  return (
    <section className="relative bg-hero min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F3460]/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/20 border border-[#FF6B35]/30 text-[#FF6B35] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            Pakistan&apos;s #1 Travel Booking Platform
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Your Journey Starts
            <br />
            <span className="text-[#FF6B35]">Right Here</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Book flights, buses, cars, and hotels at the best prices. Instant confirmation, 24/7 support, and unbeatable deals.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex border-b border-gray-100">
            {tabs.map(function(tab) {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    'flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200',
                    isActive ? 'bg-[#FF6B35] text-white' : 'text-gray-500 hover:text-[#FF6B35] hover:bg-orange-50',
                  ].join(' ')}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {activeTab === 'flights' && (
              <form onSubmit={handleSearch}>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tripType" value="one-way" checked={tripType === 'one-way'} onChange={() => setTripType('one-way')} className="accent-[#FF6B35]" />
                    <span className="text-sm font-medium text-gray-700">One Way</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tripType" value="round-trip" checked={tripType === 'round-trip'} onChange={() => setTripType('round-trip')} className="accent-[#FF6B35]" />
                    <span className="text-sm font-medium text-gray-700">Round Trip</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="From City" defaultValue="Karachi (KHI)" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="To City" defaultValue="Lahore (LHE)" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-20" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <select className="input-field pl-10 text-sm appearance-none">
                      <option>1 Passenger, Economy</option>
                      <option>2 Passengers, Economy</option>
                      <option>1 Passenger, Business</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="mt-4 w-full btn-primary flex items-center justify-center gap-2 text-base">
                  <Search className="w-5 h-5" />
                  Search Flights
                </button>
              </form>
            )}

            {activeTab === 'buses' && (
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="From City" defaultValue="Lahore" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="To City" defaultValue="Islamabad" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-20" />
                  </div>
                </div>
                <button type="submit" className="mt-4 w-full btn-primary flex items-center justify-center gap-2 text-base">
                  <Search className="w-5 h-5" />
                  Search Buses
                </button>
              </form>
            )}

            {activeTab === 'cars' && (
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="Pickup Location" defaultValue="Karachi Airport" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-20" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-23" />
                  </div>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <select className="input-field pl-10 text-sm appearance-none">
                      <option>Any Car Type</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Hatchback</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="mt-4 w-full btn-primary flex items-center justify-center gap-2 text-base">
                  <Search className="w-5 h-5" />
                  Search Cars
                </button>
              </form>
            )}

            {activeTab === 'hotels' && (
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="text" placeholder="City or Hotel Name" defaultValue="Lahore" className="input-field pl-10 text-sm" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-20" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <input type="date" className="input-field pl-10 text-sm" defaultValue="2025-01-22" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B35]" />
                    <select className="input-field pl-10 text-sm appearance-none">
                      <option>1 Room, 2 Guests</option>
                      <option>1 Room, 1 Guest</option>
                      <option>2 Rooms, 4 Guests</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="mt-4 w-full btn-primary flex items-center justify-center gap-2 text-base">
                  <Search className="w-5 h-5" />
                  Search Hotels
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
          {[
            { label: 'Happy Travelers', value: '2M+' },
            { label: 'Routes Available', value: '500+' },
            { label: 'Partner Hotels', value: '1,200+' },
            { label: 'Cities Covered', value: '80+' },
          ].map(function(stat) {
            return (
              <div key={stat.label} className="text-white">
                <div className="font-heading font-bold text-2xl text-[#FF6B35]">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
