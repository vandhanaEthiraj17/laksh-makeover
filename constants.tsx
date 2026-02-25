
import { ServiceCategory, Package, LookbookItem } from './types';

export const BRIDAL_PACKAGES: Package[] = [
  {
    id: 'b1',
    name: 'Muhurtham Classic',
    price: 8000,
    category: ServiceCategory.BRIDAL,
    description: 'The essential traditional bridal look.',
    features: ['Professional HD Makeup', 'Hair Styling', 'Basic Saree Draping'],
  },
  {
    id: 'b2',
    name: 'Muhurtham + Engagement Bundle',
    price: 15000,
    category: ServiceCategory.BRIDAL,
    description: 'Complete coverage for your primary ceremonies.',
    features: ['MUH + ENG Makeup', 'Flower Styling Included', 'Premium Saree Draping'],
    complimentary: ['Mehendi Service']
  },
  {
    id: 'b3',
    name: 'Muhurtham + Reception Bundle',
    price: 15000,
    category: ServiceCategory.BRIDAL,
    description: 'Look radiant from morning rituals to evening celebrations.',
    features: ['MUH + REC Makeup', 'Flower Styling Included', 'Advanced Hair Styling'],
    complimentary: ['Mehendi Service']
  },
  {
    id: 'b4',
    name: 'The Full Wedding Bundle',
    price: 25000,
    category: ServiceCategory.BRIDAL,
    description: 'The ultimate all-inclusive experience.',
    features: ['MUH + ENG + REC Makeup', 'Flower Styling Included', 'Multiple Saree Drapes'],
    complimentary: ['Mehendi Service', 'Pre-Bridal Consultation']
  }
];

export const SPA_PACKAGES: Package[] = [
  {
    id: 's1',
    name: 'The Spa Glow Bundle',
    price: 10000,
    category: ServiceCategory.SPA,
    description: 'Perfect pre-wedding pampering session.',
    features: ['Muhurtham Makeup', 'Premium Facial', 'Manicure & Pedicure', 'Flower Styling'],
    complimentary: ['Mehendi Service']
  }
];

export const ADDITIONAL_SERVICES = [
  { name: 'Haircuts', price: 'Starts from 500' },
  { name: 'Hair Spa', price: '1200' },
  { name: 'Hydra Facial', price: '2500' },
  { name: 'Hair Straightening', price: '4000+' },
  { name: 'Saree Draping', price: '800' },
  { name: 'Threading/Waxing', price: 'Starts from 100' },
  { name: 'Nail Art', price: 'Starts from 1200' },
];

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800',
    title: 'Royal Muhurtham',
    category: 'Bridal',
    description: 'Deep reds and traditional gold accents.'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1519415590271-723a10738392?auto=format&fit=crop&q=80&w=800',
    title: 'Ethereal Reception',
    category: 'Bridal',
    description: 'Soft glams and shimmering highlights.'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4af6b1d462a2?auto=format&fit=crop&q=80&w=800',
    title: 'Pre-Wedding Glow',
    category: 'Spa',
    description: 'Rejuvenating skin prep for the big day.'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    title: 'Drama Continuity',
    category: 'Niche',
    description: 'Theatrical makeup with strict mapping.'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f5f75?auto=format&fit=crop&q=80&w=800',
    title: 'Gilded Mandap',
    category: 'Details',
    description: 'Precision in every accessory and drape.'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
    title: 'Floral Braids',
    category: 'Hair',
    description: 'Handcrafted floral arrangements.'
  }
];
