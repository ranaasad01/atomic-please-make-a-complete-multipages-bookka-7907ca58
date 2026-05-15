export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import HeroSearch from '@/components/home/HeroSearch';
import PopularDestinations from '@/components/home/PopularDestinations';
import DealsOffers from '@/components/home/DealsOffers';
import WhyBookKaru from '@/components/home/WhyBookKaru';
import Testimonials from '@/components/home/Testimonials';
import StatsSection from '@/components/home/StatsSection';

export const metadata: Metadata = {
  title: 'BookKaru — Book Flights, Buses, Cars & Hotels',
  description: 'Pakistan\'s leading travel booking platform. Find the best deals on flights, buses, car rentals, and hotels with instant confirmation.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSearch />
      <StatsSection />
      <PopularDestinations />
      <DealsOffers />
      <WhyBookKaru />
      <Testimonials />

      {/* App Download CTA */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Travel Smarter with the <span className="text-[#FF6B35]">BookKaru App</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Get exclusive app-only deals, real-time booking updates, and manage all your trips from your pocket. Download now and get PKR 500 off your first booking!
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <button className="flex items-center gap-3 bg-white text-[#1A1A2E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white text-[#1A1A2E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#FF6B35] to-[#0F3460] rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl mb-3">✈️</div>
                  <div className="font-heading font-bold text-xl">BookKaru</div>
                  <div className="text-sm text-orange-200 mt-1">Travel App</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                PKR 500 OFF
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
