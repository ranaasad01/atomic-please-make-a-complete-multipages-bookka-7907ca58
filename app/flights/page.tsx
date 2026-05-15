export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import FlightsResults from '@/components/results/FlightsResults';

export const metadata: Metadata = {
  title: 'Search Flights — BookKaru',
  description: 'Find and book the cheapest flights across Pakistan and internationally. Compare prices, airlines, and schedules.',
};

export default function FlightsPage() {
  return <FlightsResults />;
}
