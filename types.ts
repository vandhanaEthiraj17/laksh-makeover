
export enum ServiceCategory {
  BRIDAL = 'Bridal',
  SPA = 'Spa',
  ADDITIONAL = 'Additional',
  NICHE = 'Niche'
}

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  complimentary?: string[];
  category: ServiceCategory;
}

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  packageId: string;
  totalAmount: number;
  advancePaid: number;
  balanceDue: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface LookbookItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}
