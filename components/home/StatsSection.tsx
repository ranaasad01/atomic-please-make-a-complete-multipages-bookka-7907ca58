"use client";

import { Shield, Clock, CreditCard, Headphones } from 'lucide-react';

const stats = [
  { icon: Shield, value: '100%', label: 'Secure Payments', color: 'text-green-500' },
  { icon: Clock, value: '24/7', label: 'Customer Support', color: 'text-blue-500' },
  { icon: CreditCard, value: '0%', label: 'Hidden Charges', color: 'text-[#FF6B35]' },
  { icon: Headphones, value: '5min', label: 'Avg. Response Time', color: 'text-purple-500' },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(function(stat) {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className={'w-5 h-5 ' + stat.color} />
                </div>
                <div>
                  <div className={'font-heading font-bold text-xl ' + stat.color}>{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
