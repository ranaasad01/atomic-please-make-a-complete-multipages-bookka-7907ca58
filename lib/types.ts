export type TravelType = 'flight' | 'bus' | 'car' | 'hotel';

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopDetails?: string;
  price: number;
  originalPrice?: number;
  class: string;
  seatsLeft: number;
  rating: number;
  amenities: string[];
}

export interface Bus {
  id: string;
  operator: string;
  busType: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  originalPrice?: number;
  seatsLeft: number;
  rating: number;
  amenities: string[];
  boardingPoint: string;
  droppingPoint: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  type: string;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  pricePerDay: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  features: string[];
  pickupLocation: string;
  available: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  location: string;
  city: string;
  stars: number;
  rating: number;
  reviews: number;
  pricePerNight: number;
  originalPrice?: number;
  amenities: string[];
  roomTypes: string[];
  distanceFromCenter: string;
  freeCancellation: boolean;
  breakfastIncluded: boolean;
}

export interface Booking {
  id: string;
  type: TravelType;
  status: 'upcoming' | 'completed' | 'cancelled';
  bookingDate: string;
  travelDate: string;
  origin?: string;
  destination?: string;
  passengers: number;
  totalAmount: number;
  details: string;
  confirmationCode: string;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  image: string;
  flightPrice: number;
  hotelPrice: number;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
  travelType: TravelType;
  date: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  type: TravelType;
  validUntil: string;
  code: string;
}
