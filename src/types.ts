export interface User {
  id: string;
  name: string;
  avatar: string;
  isVerified: boolean;
  rating: number;
  totalReviews: number;
  location: string;
  joinedDate: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  pricePerDay: number;
  replacementValue: number;
  images: string[];
  ownerId: string;
  condition: 'Excellent' | 'Good' | 'Acceptable';
  location: string;
  distance?: string;
  isSmartPriced: boolean;
}

export type CategoryType = 
  | 'Photography' 
  | 'Power Tools' 
  | 'Event & AV' 
  | 'Camping' 
  | 'Music' 
  | 'Sports' 
  | 'Electronics'
  | 'Gaming'
  | 'Home & Kitchen'
  | 'Office'
  | 'Cleaning';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}
