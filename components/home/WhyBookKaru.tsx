"use client";

import { Shield, Zap, Tag, Star, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: 'Best Price Guarantee',
    description: 'We compare prices across hundreds of providers to ensure you always get the lowest fare. Found it cheaper? We\'ll match it.',
    color: 'bg-orange-100 text-[#FF6B35]',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: 'Get your booking confirmed in seconds. No waiting, no uncertainty — just instant e-tickets delivered to your inbox.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Secure & Trusted',
    description: 'Your payments are protected with bank-grade 256-bit SSL encryption. Over 2 million travelers trust BookKaru.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available round the clock via chat, phone, and email to assist you anytime.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Globe,
    title: 'Wide Coverage',
    description: 'Access 500+ routes, 1,200+ hotels, and car rentals across 80+ cities in Pakistan and internationally.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Star,
    title: 'Loyalty Rewards',
    description: 'Earn KaruPoints on every booking and redeem them for free trips, upgrades, and exclusive member discounts.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export default function WhyBookKaru() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose BookKaru?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We&apos;re not just a booking platform — we&apos;re your travel partner, committed to making every journey seamless and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(function(feature) {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6 hover:-translate-y-1 transition-all duration-300">
                <div className={'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ' + feature.color}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#1A1A2E] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
