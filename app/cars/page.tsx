export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import CarsResults from '@/components/results/CarsResults';

export const metadata: Metadata = {
  title: 'Car Rentals — BookKaru',
  description: 'Rent a car with BookKaru. Choose from sedans, SUVs, hatchbacks, and luxury vehicles at the best daily rates.',
};

export default function CarsPage() {
  return <CarsResults />;
}
