import { Flight, Bus, Car, Hotel, Booking, Destination, Testimonial, Deal } from './types';

export const mockFlights: Flight[] = [
  {
    id: 'fl-001',
    airline: 'AirKaru Express',
    airlineLogo: '/images/airline-airkaru.jpg',
    flightNumber: 'AK 201',
    origin: 'Karachi',
    originCode: 'KHI',
    destination: 'Lahore',
    destinationCode: 'LHE',
    departureTime: '06:00',
    arrivalTime: '07:10',
    duration: '1h 10m',
    stops: 0,
    price: 8500,
    originalPrice: 11000,
    class: 'Economy',
    seatsLeft: 12,
    rating: 4.5,
    amenities: ['WiFi', 'Meal', 'USB Charging'],
  },
  {
    id: 'fl-002',
    airline: 'PakWings',
    airlineLogo: '/images/airline-pakwings.jpg',
    flightNumber: 'PW 305',
    origin: 'Karachi',
    originCode: 'KHI',
    destination: 'Lahore',
    destinationCode: 'LHE',
    departureTime: '09:30',
    arrivalTime: '10:45',
    duration: '1h 15m',
    stops: 0,
    price: 7200,
    originalPrice: 9500,
    class: 'Economy',
    seatsLeft: 5,
    rating: 4.2,
    amenities: ['Meal', 'USB Charging'],
  },
  {
    id: 'fl-003',
    airline: 'SkyRoute',
    airlineLogo: '/images/airline-skyroute.jpg',
    flightNumber: 'SR 112',
    origin: 'Karachi',
    originCode: 'KHI',
    destination: 'Islamabad',
    destinationCode: 'ISB',
    departureTime: '11:00',
    arrivalTime: '12:30',
    duration: '1h 30m',
    stops: 0,
    price: 9800,
    originalPrice: 13000,
    class: 'Business',
    seatsLeft: 3,
    rating: 4.8,
    amenities: ['WiFi', 'Premium Meal', 'Lounge Access', 'Extra Legroom'],
  },
  {
    id: 'fl-004',
    airline: 'AirKaru Express',
    airlineLogo: '/images/airline-airkaru.jpg',
    flightNumber: 'AK 415',
    origin: 'Lahore',
    originCode: 'LHE',
    destination: 'Islamabad',
    destinationCode: 'ISB',
    departureTime: '14:00',
    arrivalTime: '15:00',
    duration: '1h 00m',
    stops: 0,
    price: 6500,
    class: 'Economy',
    seatsLeft: 20,
    rating: 4.3,
    amenities: ['USB Charging'],
  },
  {
    id: 'fl-005',
    airline: 'PakWings',
    airlineLogo: '/images/airline-pakwings.jpg',
    flightNumber: 'PW 520',
    origin: 'Islamabad',
    originCode: 'ISB',
    destination: 'Dubai',
    destinationCode: 'DXB',
    departureTime: '02:00',
    arrivalTime: '04:30',
    duration: '2h 30m',
    stops: 0,
    price: 45000,
    originalPrice: 58000,
    class: 'Economy',
    seatsLeft: 8,
    rating: 4.6,
    amenities: ['WiFi', 'Meal', 'Entertainment'],
  },
  {
    id: 'fl-006',
    airline: 'SkyRoute',
    airlineLogo: '/images/airline-skyroute.jpg',
    flightNumber: 'SR 780',
    origin: 'Karachi',
    originCode: 'KHI',
    destination: 'Dubai',
    destinationCode: 'DXB',
    departureTime: '22:00',
    arrivalTime: '00:30',
    duration: '2h 30m',
    stops: 0,
    price: 42000,
    originalPrice: 55000,
    class: 'Economy',
    seatsLeft: 15,
    rating: 4.4,
    amenities: ['Meal', 'Entertainment'],
  },
];

export const mockBuses: Bus[] = [
  {
    id: 'bs-001',
    operator: 'Daewoo Express',
    busType: 'Business Class AC',
    origin: 'Lahore',
    destination: 'Islamabad',
    departureTime: '07:00',
    arrivalTime: '11:30',
    duration: '4h 30m',
    price: 1200,
    originalPrice: 1500,
    seatsLeft: 18,
    rating: 4.7,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Snacks', 'Blanket'],
    boardingPoint: 'Daewoo Terminal, Lahore',
    droppingPoint: 'Daewoo Terminal, Islamabad',
  },
  {
    id: 'bs-002',
    operator: 'Faisal Movers',
    busType: 'Executive AC',
    origin: 'Lahore',
    destination: 'Islamabad',
    departureTime: '09:00',
    arrivalTime: '13:30',
    duration: '4h 30m',
    price: 950,
    originalPrice: 1200,
    seatsLeft: 6,
    rating: 4.3,
    amenities: ['AC', 'USB Charging', 'Snacks'],
    boardingPoint: 'Faisal Movers Terminal, Lahore',
    droppingPoint: 'Faisal Movers Terminal, Islamabad',
  },
  {
    id: 'bs-003',
    operator: 'Skyways',
    busType: 'Luxury Sleeper',
    origin: 'Karachi',
    destination: 'Lahore',
    departureTime: '20:00',
    arrivalTime: '08:00',
    duration: '12h 00m',
    price: 2500,
    originalPrice: 3200,
    seatsLeft: 10,
    rating: 4.8,
    amenities: ['AC', 'WiFi', 'Sleeper Seats', 'Meal', 'Entertainment'],
    boardingPoint: 'Skyways Terminal, Karachi',
    droppingPoint: 'Skyways Terminal, Lahore',
  },
  {
    id: 'bs-004',
    operator: 'Bilal Travels',
    busType: 'Standard AC',
    origin: 'Karachi',
    destination: 'Hyderabad',
    departureTime: '08:00',
    arrivalTime: '10:30',
    duration: '2h 30m',
    price: 600,
    seatsLeft: 25,
    rating: 4.0,
    amenities: ['AC'],
    boardingPoint: 'Bilal Terminal, Karachi',
    droppingPoint: 'Bilal Terminal, Hyderabad',
  },
];

export const mockCars: Car[] = [
  {
    id: 'cr-001',
    name: 'Toyota Corolla',
    brand: 'Toyota',
    type: 'Sedan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricePerDay: 4500,
    originalPrice: 5500,
    rating: 4.6,
    reviews: 234,
    features: ['AC', 'GPS', 'Bluetooth', 'Backup Camera'],
    pickupLocation: 'Karachi Airport',
    available: true,
  },
  {
    id: 'cr-002',
    name: 'Honda Civic',
    brand: 'Honda',
    type: 'Sedan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg/1280px-Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricePerDay: 5000,
    originalPrice: 6200,
    rating: 4.7,
    reviews: 189,
    features: ['AC', 'GPS', 'Sunroof', 'Bluetooth', 'Backup Camera'],
    pickupLocation: 'Lahore Airport',
    available: true,
  },
  {
    id: 'cr-003',
    name: 'Toyota Fortuner',
    brand: 'Toyota',
    type: 'SUV',
    image: 'https://images.carexpert.com.au/resize/800/-/cms/v1/media/2025-05-2025-toyota-fortuner-gxlhero-3x2-1.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    pricePerDay: 9500,
    originalPrice: 12000,
    rating: 4.8,
    reviews: 156,
    features: ['AC', 'GPS', '4WD', 'Bluetooth', 'Leather Seats'],
    pickupLocation: 'Islamabad Airport',
    available: true,
  },
  {
    id: 'cr-004',
    name: 'Suzuki Alto',
    brand: 'Suzuki',
    type: 'Hatchback',
    image: 'https://picsum.photos/seed/7ae6eeaeea71/800/600',
    seats: 4,
    transmission: 'Manual',
    fuelType: 'Petrol',
    pricePerDay: 2500,
    originalPrice: 3000,
    rating: 4.1,
    reviews: 312,
    features: ['AC', 'Bluetooth'],
    pickupLocation: 'Karachi City',
    available: true,
  },
  {
    id: 'cr-005',
    name: 'Mercedes C-Class',
    brand: 'Mercedes',
    type: 'Luxury',
    image: 'https://picsum.photos/seed/9768e95465ff/800/600',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    pricePerDay: 18000,
    originalPrice: 22000,
    rating: 4.9,
    reviews: 87,
    features: ['AC', 'GPS', 'Sunroof', 'Leather Seats', 'Premium Sound', 'Chauffeur Available'],
    pickupLocation: 'Lahore City',
    available: true,
  },
];

export const mockHotels: Hotel[] = [
  {
    id: 'ht-001',
    name: 'Pearl Continental Karachi',
    image: 'https://images.trvl-media.com/lodging/1000000/530000/522900/522878/551d85d2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    location: 'Club Road, Karachi',
    city: 'Karachi',
    stars: 5,
    rating: 4.8,
    reviews: 1245,
    pricePerNight: 18000,
    originalPrice: 24000,
    amenities: ['Pool', 'Spa', 'Gym', 'Restaurant', 'Bar', 'WiFi', 'Parking', 'Room Service'],
    roomTypes: ['Deluxe', 'Suite', 'Executive Suite', 'Presidential Suite'],
    distanceFromCenter: '0.5 km',
    freeCancellation: true,
    breakfastIncluded: true,
  },
  {
    id: 'ht-002',
    name: 'Avari Towers Lahore',
    image: 'https://images.trvl-media.com/lodging/2000000/1640000/1635900/1635861/1bcb1a81.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    location: 'Shahrah-e-Quaid-e-Azam, Lahore',
    city: 'Lahore',
    stars: 5,
    rating: 4.7,
    reviews: 987,
    pricePerNight: 15000,
    originalPrice: 20000,
    amenities: ['Pool', 'Gym', 'Restaurant', 'WiFi', 'Parking', 'Room Service', 'Business Center'],
    roomTypes: ['Standard', 'Deluxe', 'Suite'],
    distanceFromCenter: '1.2 km',
    freeCancellation: true,
    breakfastIncluded: false,
  },
  {
    id: 'ht-003',
    name: 'Serena Hotel Islamabad',
    image: 'https://image-tc.galaxy.tf/wijpeg-eugyxtxg4ges46jpxs6ay8hgo/ish.jpg',
    location: 'Khayaban-e-Suhrawardy, Islamabad',
    city: 'Islamabad',
    stars: 5,
    rating: 4.9,
    reviews: 1567,
    pricePerNight: 22000,
    originalPrice: 28000,
    amenities: ['Pool', 'Spa', 'Gym', 'Restaurant', 'WiFi', 'Parking', 'Room Service', 'Tennis Court'],
    roomTypes: ['Deluxe', 'Junior Suite', 'Suite', 'Presidential Suite'],
    distanceFromCenter: '2.0 km',
    freeCancellation: true,
    breakfastIncluded: true,
  },
  {
    id: 'ht-004',
    name: 'Ramada Multan',
    image: 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/ra/pk/others/multan/19764/19764_exterior_view_3.jpg',
    location: 'Abdali Road, Multan',
    city: 'Multan',
    stars: 4,
    rating: 4.4,
    reviews: 456,
    pricePerNight: 8500,
    originalPrice: 11000,
    amenities: ['Pool', 'Gym', 'Restaurant', 'WiFi', 'Parking'],
    roomTypes: ['Standard', 'Deluxe', 'Suite'],
    distanceFromCenter: '1.5 km',
    freeCancellation: false,
    breakfastIncluded: true,
  },
  {
    id: 'ht-005',
    name: 'Nishat Hotel Lahore',
    image: 'https://prod-nishat-hotel.s3.eu-west-1.amazonaws.com/feature-images/173441619992.jpg',
    location: 'Main Boulevard Gulberg, Lahore',
    city: 'Lahore',
    stars: 5,
    rating: 4.6,
    reviews: 789,
    pricePerNight: 16500,
    originalPrice: 21000,
    amenities: ['Pool', 'Spa', 'Gym', 'Restaurant', 'WiFi', 'Parking', 'Room Service'],
    roomTypes: ['Deluxe', 'Suite', 'Executive Suite'],
    distanceFromCenter: '3.0 km',
    freeCancellation: true,
    breakfastIncluded: false,
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'bk-001',
    type: 'flight',
    status: 'upcoming',
    bookingDate: '2024-12-01',
    travelDate: '2025-01-15',
    origin: 'Karachi',
    destination: 'Lahore',
    passengers: 2,
    totalAmount: 17000,
    details: 'AirKaru Express AK 201 | 06:00 - 07:10',
    confirmationCode: 'BK-AK201-2501',
  },
  {
    id: 'bk-002',
    type: 'hotel',
    status: 'upcoming',
    bookingDate: '2024-12-05',
    travelDate: '2025-01-15',
    destination: 'Lahore',
    passengers: 2,
    totalAmount: 30000,
    details: 'Avari Towers Lahore | 2 Nights | Deluxe Room',
    confirmationCode: 'BK-AT-2501',
  },
  {
    id: 'bk-003',
    type: 'bus',
    status: 'completed',
    bookingDate: '2024-11-10',
    travelDate: '2024-11-20',
    origin: 'Lahore',
    destination: 'Islamabad',
    passengers: 1,
    totalAmount: 1200,
    details: 'Daewoo Express | Business Class | 07:00 - 11:30',
    confirmationCode: 'BK-DW-2411',
  },
  {
    id: 'bk-004',
    type: 'car',
    status: 'completed',
    bookingDate: '2024-10-15',
    travelDate: '2024-10-22',
    destination: 'Karachi',
    passengers: 1,
    totalAmount: 13500,
    details: 'Toyota Corolla | 3 Days | Karachi Airport',
    confirmationCode: 'BK-TC-2410',
  },
];

export const popularDestinations: Destination[] = [
  { id: 'dest-1', city: 'Lahore', country: 'Pakistan', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/dd/lahore.jpg?w=1200&h=700&s=1', flightPrice: 7200, hotelPrice: 8500, tag: 'Most Popular' },
  { id: 'dest-2', city: 'Islamabad', country: 'Pakistan', image: 'https://www.agoda.com/wp-content/uploads/2024/03/Islamabad-cover-1478x700.jpg', flightPrice: 8500, hotelPrice: 12000 },
  { id: 'dest-3', city: 'Dubai', country: 'UAE', image: 'https://kingsedu.ac/wp-content/uploads/2024/02/attractions-1.jpg', flightPrice: 42000, hotelPrice: 25000, tag: 'Trending' },
  { id: 'dest-4', city: 'Istanbul', country: 'Turkey', image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ic81ff92c99a968a1/version/1604840061/travel-turkey-tourism.jpg', flightPrice: 85000, hotelPrice: 18000 },
  { id: 'dest-5', city: 'Murree', country: 'Pakistan', image: 'https://destinationhotels.com.pk/wp-content/uploads/2025/01/muree.jpg', flightPrice: 6500, hotelPrice: 6000, tag: 'Weekend Getaway' },
  { id: 'dest-6', city: 'Hunza', country: 'Pakistan', image: 'https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/araza03032301.jpg', flightPrice: 9500, hotelPrice: 5500, tag: 'Adventure' },
];

export const testimonials: Testimonial[] = [
  {
    id: 'tm-001',
    name: 'Ahmed Raza',
    avatar: 'https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/araza03032301.jpg',
    location: 'Karachi, Pakistan',
    rating: 5,
    comment: 'BookKaru made my family trip to Lahore so easy! Booked flights and hotel in under 5 minutes. The prices were unbeatable and the whole experience was seamless.',
    travelType: 'flight',
    date: 'December 2024',
  },
  {
    id: 'tm-002',
    name: 'Fatima Khan',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGwDf9EvhcdjA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702716417621?e=2147483647&v=beta&t=aP0FyEVP88wSzxa4XkA4Ls9TQSLiOg7lW9beM9IKP9s',
    location: 'Lahore, Pakistan',
    rating: 5,
    comment: 'I use BookKaru every time I travel for work. The bus booking feature is fantastic — Daewoo tickets at the best prices with instant confirmation. Highly recommended!',
    travelType: 'bus',
    date: 'November 2024',
  },
  {
    id: 'tm-003',
    name: 'Usman Ali',
    avatar: 'https://www.wearelumos.org/wp-content/uploads/2025/02/usman-ali.png',
    location: 'Islamabad, Pakistan',
    rating: 4,
    comment: 'Rented a car through BookKaru for my Murree trip. The Toyota Fortuner was in perfect condition and the pickup was smooth. Will definitely use again for my next adventure.',
    travelType: 'car',
    date: 'October 2024',
  },
  {
    id: 'tm-004',
    name: 'Sara Malik',
    avatar: 'https://d30i16bbj53pdg.cloudfront.net/wp-content/uploads/2021/05/Sara.jpg',
    location: 'Multan, Pakistan',
    rating: 5,
    comment: 'Stayed at Pearl Continental through BookKaru and got an amazing deal — 25% off the regular rate! The hotel was luxurious and the booking process was incredibly simple.',
    travelType: 'hotel',
    date: 'September 2024',
  },
];

export const deals: Deal[] = [
  {
    id: 'deal-001',
    title: 'Fly to Dubai for Less',
    description: 'Get 30% off on all international flights to Dubai this winter season.',
    discount: '30% OFF',
    image: 'https://i.ytimg.com/vi/2xaGRlR8AFI/sddefault.jpg',
    type: 'flight',
    validUntil: '2025-01-31',
    code: 'DUBAI30',
  },
  {
    id: 'deal-002',
    title: 'Luxury Hotel Deals',
    description: 'Book 5-star hotels in Lahore and Islamabad at exclusive BookKaru rates.',
    discount: '25% OFF',
    image: '/images/deal-luxury-hotels.jpg',
    type: 'hotel',
    validUntil: '2025-02-28',
    code: 'LUXURY25',
  },
  {
    id: 'deal-003',
    title: 'Weekend Bus Getaway',
    description: 'Travel in comfort with Daewoo and Skyways at special weekend prices.',
    discount: '20% OFF',
    image: '/images/deal-bus-weekend.jpg',
    type: 'bus',
    validUntil: '2025-01-15',
    code: 'WEEKEND20',
  },
  {
    id: 'deal-004',
    title: 'Drive Your Adventure',
    description: 'Rent premium SUVs and sedans for your next road trip at unbeatable prices.',
    discount: '15% OFF',
    image: '/images/deal-car-rental.jpg',
    type: 'car',
    validUntil: '2025-03-31',
    code: 'DRIVE15',
  },
];
