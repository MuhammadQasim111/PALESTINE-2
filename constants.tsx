import { TravelPackage, Testimonial, AppIdea, NavItem } from './types';
import { Smartphone, Globe, Zap, CreditCard, Users } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'The Planet', path: '/planet' },
  { label: 'Voyages', path: '/packages' },
  { label: 'Investors', path: '/investor' },
  { label: 'Future Tech', path: '/apps' },
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'explorer',
    title: 'Explorer Class',
    price: '$28,000',
    duration: '3 Days',
    features: ['Economy Hyper-Cabin', 'Crystal Forest Guided Tour', 'Light-Surfing Session', 'Standard Meals'],
    image: 'https://picsum.photos/id/1036/800/600',
  },
  {
    id: 'family',
    title: 'Family Orbital',
    price: '$58,000',
    duration: '4 Nights',
    features: ['Quad-Berth Suite', 'Safe Zone Access', 'Zero-G Kids Garden', 'Holographic Memories'],
    image: 'https://picsum.photos/id/1038/800/600',
  },
  {
    id: 'luxury',
    title: 'Nebula Suite',
    price: '$95,000',
    duration: '7 Days',
    features: ['Private Nebula View', 'Personal Rover + Guide', 'Gourmet Molecular Dining', 'Floating Island Spa'],
    isPopular: true,
    image: 'https://picsum.photos/id/1042/800/600',
  },
  {
    id: 'research',
    title: 'Research Pass',
    price: '$120,000',
    duration: '14 Days',
    features: ['Lab Module Access', 'Seraphi Temple Permit', 'Deep-Core Drilling Tour', 'Data Export License'],
    image: 'https://picsum.photos/id/1015/800/600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amina R.',
    role: 'Architect',
    quote: 'I walked on floating islands. NOTHING on Earth compares. The way the light moves through the crystal forests is alive.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dale M.',
    role: 'Musician',
    quote: 'The glowing ocean made me feel like I was inside a star. The soundscapes in the caverns are otherworldly.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Haruto S.',
    role: 'Exo-Biologist',
    quote: 'Incredible research facilities. Celestia provides safe access to the most volatile biomes for study.',
    rating: 4,
  },
];

export const APP_IDEAS: AppIdea[] = [
  {
    id: 'ar-portal',
    name: 'Aurion AR Portal',
    trend: 'AR Exploration',
    description: 'Preview the entire planet through augmented reality before you book.',
    features: ['AR Floating Island Viewer', 'Interactive 3D Creatures', 'Real-scale Seraphi Temple'],
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
  },
  {
    id: 'ai-planner',
    name: 'AstraVoyage Planner',
    trend: 'AI Travel Assistants',
    description: 'A generative AI that designs your entire space trip itinerary based on your biometrics.',
    features: ['Personalized Itinerary', 'Real-time Assistant', 'Package Comparison'],
    icon: <Zap className="w-6 h-6 text-purple-400" />,
  },
  {
    id: 'zero-g',
    name: 'Zero-G Trainer',
    trend: 'Gamified Fitness',
    description: 'Prepare your body for zero gravity using gamified VR workouts at home.',
    features: ['VR Balance Challenges', 'AI Posture Analysis', 'Mission Leveling'],
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: 'passport',
    name: 'Galactic Passport',
    trend: 'Blockchain Identity',
    description: 'NFT-based immutable identity verification for multi-planet travelers.',
    features: ['Secure Biometrics', 'Visa-free Zone Entry', 'Loyalty Tokens'],
    icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
  },
  {
    id: 'hub',
    name: 'Aurion Experience Hub',
    trend: 'Social Metaverse',
    description: 'Social VR space to hang out with other travelers before the actual trip.',
    features: ['Virtual Lounges', 'Live Event Streaming', 'Avatar Customization'],
    icon: <Users className="w-6 h-6 text-pink-400" />,
  },
];
