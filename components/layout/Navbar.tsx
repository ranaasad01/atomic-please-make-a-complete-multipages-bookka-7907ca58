'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, Plane, Bus, Car, Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Flights', href: '/flights', icon: Plane },
  { label: 'Buses', href: '/buses', icon: Bus },
  { label: 'Cars', href: '/cars', icon: Car },
  { label: 'Hotels', href: '/hotels', icon: Building2 },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#1A1A2E] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#FF6B35] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 text-white rotate-45" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Book<span className="text-[#FF6B35]">Karu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive ? 'bg-[#FF6B35] text-white' : 'text-gray-300 hover:text-white hover:bg-white/10',
                  ].join(' ')}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <User className="w-4 h-4" />
              My Trips
            </Link>
            <Link
              href="/login"
              className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#FF6B35] hover:bg-[#E55A24] text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#16213E] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                    isActive ? 'bg-[#FF6B35] text-white' : 'text-gray-300 hover:text-white hover:bg-white/10',
                  ].join(' ')}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <User className="w-5 h-5" />
                My Trips
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="text-center bg-[#FF6B35] hover:bg-[#E55A24] text-white text-sm font-semibold py-3 rounded-xl transition-all"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
