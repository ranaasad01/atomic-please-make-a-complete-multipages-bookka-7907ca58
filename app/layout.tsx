import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BookKaru — Book Flights, Buses, Cars & Hotels',
    template: '%s | BookKaru',
  },
  description: 'BookKaru is Pakistan\'s leading travel booking platform. Search and book flights, buses, cars, and hotels at the best prices with instant confirmation.',
  keywords: ['flights', 'buses', 'hotels', 'car rental', 'travel booking', 'Pakistan', 'BookKaru'],
  openGraph: {
    title: 'BookKaru — Book Flights, Buses, Cars & Hotels',
    description: 'Pakistan\'s leading travel booking platform with the best prices.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F5F5F5]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
