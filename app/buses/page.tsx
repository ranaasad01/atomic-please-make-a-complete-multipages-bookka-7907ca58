export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import BusesResults from '@/components/results/BusesResults';

export const metadata: Metadata = {
  title: 'Search Buses — BookKaru',
  description: 'Book bus tickets online with BookKaru. Compare operators, prices, and schedules for comfortable travel across Pakistan.',
};

export default function BusesPage() {
  return <BusesResults />;
}
