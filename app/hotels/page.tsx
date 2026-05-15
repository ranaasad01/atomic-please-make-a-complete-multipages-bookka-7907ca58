export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import HotelsResults from '@/components/results/HotelsResults';

export const metadata: Metadata = {
  title: 'Search Hotels — BookKaru',
  description: 'Find and book the best hotels in Pakistan. Compare prices, amenities, and reviews for 5-star to budget hotels.',
};

export default function HotelsPage() {
  return <HotelsResults />;
}
