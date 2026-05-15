"use client";

import Link from 'next/link';
import { Tag, ArrowRight, Clock } from 'lucide-react';
import { deals } from '@/lib/mock-data';

const typeColors: Record<string, string> = {
  flight: 'bg-blue-100 text-blue-700',
  hotel: 'bg-purple-100 text-purple-700',
  bus: 'bg-green-100 text-green-700',
  car: 'bg-orange-100 text-orange-700',
};

const typeLinks: Record<string, string> = {
  flight: '/flights',
  hotel: '/hotels',
  bus: '/buses',
  car: '/cars',
};

export default function DealsOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Exclusive Deals & Offers</h2>
            <p className="section-subtitle">Limited-time offers you don&apos;t want to miss</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-[#FF6B35]" />
            Updated daily
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map(function(deal) {
            const href = typeLinks[deal.type] || '/';
            return (
              <Link key={deal.id} href={href} className="group card overflow-hidden flex flex-col sm:flex-row hover:-translate-y-1 transition-all duration-300">
                <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF6B35] text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={'text-xs font-semibold px-2.5 py-1 rounded-full capitalize ' + (typeColors[deal.type] || 'bg-gray-100 text-gray-700')}>
                        {deal.type}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-2 group-hover:text-[#FF6B35] transition-colors">
                      {deal.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{deal.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#FF6B35]" />
                      <span className="text-sm font-semibold text-[#1A1A2E]">Code: <span className="text-[#FF6B35]">{deal.code}</span></span>
                    </div>
                    <div className="flex items-center gap-1 text-[#FF6B35] font-semibold text-sm group-hover:gap-2 transition-all">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    Valid until: {new Date(deal.validUntil).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
