import { Listing, User, CategoryType } from './types';

export const CATEGORIES: { label: CategoryType; icon: string }[] = [
  { label: 'Photography', icon: 'Camera' },
  { label: 'Power Tools', icon: 'Wrench' },
  { label: 'Event & AV', icon: 'Video' },
  { label: 'Camping', icon: 'Tent' },
  { label: 'Music', icon: 'Music' },
  { label: 'Sports', icon: 'Dribbble' },
  { label: 'Electronics', icon: 'Cpu' },
  { label: 'Gaming', icon: 'Gamepad2' },
  { label: 'Home & Kitchen', icon: 'Utensils' },
  {
    label: 'Office',
    icon: 'Briefcase'
  },
];

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Siam Ahmed',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    isVerified: true,
    rating: 4.8,
    totalReviews: 24,
    location: 'Bashundhara R/A, Block C',
    joinedDate: 'Jan 2024'
  },
  {
    id: 'u2',
    name: 'Nusrat Jahan',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    isVerified: true,
    rating: 4.9,
    totalReviews: 18,
    location: 'Bashundhara R/A, Block D',
    joinedDate: 'March 2024'
  },
  {
    id: 'u3',
    name: 'Tanvir Hossain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    isVerified: true,
    rating: 4.7,
    totalReviews: 12,
    location: 'Bashundhara R/A, Block A',
    joinedDate: 'Feb 2024'
  },
  {
    id: 'u4',
    name: 'Adiba Karim',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    isVerified: true,
    rating: 5.0,
    totalReviews: 8,
    location: 'Bashundhara R/A, Block B',
    joinedDate: 'April 2024'
  }
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 'l1',
    title: 'Sony A7III + 24-70mm GM',
    description: 'Perfect condition mirrorless camera. Includes 2 batteries and a 64GB card. Great for student projects or weddings.',
    category: 'Photography',
    pricePerDay: 1200,
    replacementValue: 180000,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      'https://images.unsplash.com/photo-1516035048123-264627038fd4?w=800&q=80'
    ],
    ownerId: 'u1',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '0.8 km',
    isSmartPriced: true
  },
  {
    id: 'l2',
    title: 'Bosch Professional Drill',
    description: 'High torque power drill with extra bits. Suitable for home DIY or light construction.',
    category: 'Power Tools',
    pricePerDay: 450,
    replacementValue: 12000,
    images: ['https://images.unsplash.com/photo-1504148455328-4375b7700d3e?w=800&q=80'],
    ownerId: 'u2',
    condition: 'Good',
    location: 'Bashundhara R/A',
    distance: '1.2 km',
    isSmartPriced: false
  },
  {
    id: 'l3',
    title: '3-Person Waterproof Tent',
    description: 'Easy to setup tent. Perfect for weekend trips. Lightweight and durable.',
    category: 'Camping',
    pricePerDay: 300,
    replacementValue: 8000,
    images: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80'],
    ownerId: 'u1',
    condition: 'Excellent',
    location: 'Aftabnagar',
    distance: '2.5 km',
    isSmartPriced: true
  },
  {
    id: 'l4',
    title: 'Epson 1080p Projector',
    description: 'Bright projector with HDMI cable. Great for movie nights or presentations.',
    category: 'Event & AV',
    pricePerDay: 800,
    replacementValue: 45000,
    images: ['https://images.unsplash.com/photo-1535016120720-40c646be44da?w=800&q=80'],
    ownerId: 'u2',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '0.5 km',
    isSmartPriced: true
  },
  {
    id: 'l5',
    title: 'PlayStation 5 Console',
    description: 'Comes with two DualSense controllers and God of War Ragnarok. 4K gaming experience.',
    category: 'Gaming',
    pricePerDay: 1500,
    replacementValue: 65000,
    images: ['https://images.unsplash.com/photo-1606813907291-d86ebb9474ad?w=800&q=80'],
    ownerId: 'u3',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '1.5 km',
    isSmartPriced: true
  },
  {
    id: 'l6',
    title: 'Electric Pressure Washer',
    description: '2000 PSI pressure washer. Perfect for cleaning cars or driveways. Variable nozzle included.',
    category: 'Cleaning',
    pricePerDay: 600,
    replacementValue: 15000,
    images: ['https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80'],
    ownerId: 'u1',
    condition: 'Good',
    location: 'Bashundhara R/A',
    distance: '0.9 km',
    isSmartPriced: false
  },
  {
    id: 'l7',
    title: 'DJI Mini 3 Pro Drone',
    description: '4K video, less than 249g. Includes Fly More Combo (3 batteries). Easy for beginners.',
    category: 'Photography',
    pricePerDay: 1800,
    replacementValue: 95000,
    images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80'],
    ownerId: 'u2',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '1.1 km',
    isSmartPriced: true
  },
  {
    id: 'l8',
    title: 'Yamaha Acoustic Guitar',
    description: 'Rich tone and great playability. Perfect for casual jamming or learning.',
    category: 'Music',
    pricePerDay: 350,
    replacementValue: 15000,
    images: ['https://images.unsplash.com/photo-1510915363646-e92da3d7d7f9?w=800&q=80'],
    ownerId: 'u3',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '0.4 km',
    isSmartPriced: false
  },
  {
    id: 'l9',
    title: 'KitchenAid Stand Mixer',
    description: 'Professional 5qt stand mixer. Includes whisk, dough hook, and paddle. Ideal for baking.',
    category: 'Home & Kitchen',
    pricePerDay: 700,
    replacementValue: 35000,
    images: ['https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?w=800&q=80'],
    ownerId: 'u1',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '2.1 km',
    isSmartPriced: true
  },
  {
    id: 'l10',
    title: 'Professional Cricket Gear Set',
    description: 'Full kit: English Willow bat, pads, gloves, and helmet. Perfectly maintained.',
    category: 'Sports',
    pricePerDay: 500,
    replacementValue: 20000,
    images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80'],
    ownerId: 'u2',
    condition: 'Good',
    location: 'Bashundhara R/A',
    distance: '0.6 km',
    isSmartPriced: false
  },
  {
    id: 'l11',
    title: 'Soldering & Electronics Lab Kit',
    description: 'Digital oscilloscope, soldering station, and breadboard set. Perfect for engineering students.',
    category: 'Electronics',
    pricePerDay: 400,
    replacementValue: 18000,
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'],
    ownerId: 'u3',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '1.8 km',
    isSmartPriced: true
  },
  {
    id: 'l12',
    title: 'Herman Miller Aeron Chair',
    description: 'Highly ergonomic office chair. Perfect for long work sessions. Graphite finish, Size B.',
    category: 'Office',
    pricePerDay: 1500,
    replacementValue: 140000,
    images: ['https://images.unsplash.com/photo-1505797149-35ebcb05a6fd?w=800&q=80'],
    ownerId: 'u4',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '0.3 km',
    isSmartPriced: true
  },
  {
    id: 'l13',
    title: 'Apple Pro Display XDR',
    description: '32-inch 6K Retina display. Incredible color accuracy and brightness. Includes Pro Stand.',
    category: 'Electronics',
    pricePerDay: 5000,
    replacementValue: 450000,
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80'],
    ownerId: 'u4',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '0.3 km',
    isSmartPriced: true
  },
  {
    id: 'l14',
    title: 'GoPro HERO12 Black',
    description: 'Action camera with hyper-smooth stabilization. Includes head strap and extra batteries.',
    category: 'Photography',
    pricePerDay: 800,
    replacementValue: 45000,
    images: ['https://images.unsplash.com/photo-1504100321475-b3e13e3d75fa?w=800&q=80'],
    ownerId: 'u2',
    condition: 'Excellent',
    location: 'Bashundhara R/A',
    distance: '1.4 km',
    isSmartPriced: true
  }
];
