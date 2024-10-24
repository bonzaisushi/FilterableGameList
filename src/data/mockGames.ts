import { Game } from '../types';

const twoYearsAgo = new Date();
twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Stellar Odyssey',
    releaseDate: '2023-11-15',
    rating: 4.5,
    systems: ['PC', 'PlayStation', 'Xbox'],
    coverUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '2',
    title: 'Neon Warriors',
    releaseDate: '2023-08-22',
    rating: 4.0,
    systems: ['PC', 'PlayStation'],
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '3',
    title: 'Forest Kingdom',
    releaseDate: '2023-03-10',
    rating: 5.0,
    systems: ['PlayStation', 'Xbox'],
    coverUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '4',
    title: 'Speed Racers 2024',
    releaseDate: '2024-01-15',
    rating: 4.0,
    systems: ['PC', 'Xbox'],
    coverUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1470',
  },
  {
    id: '5',
    title: 'Cyber Revolution',
    releaseDate: '2022-12-01',
    rating: 3.5,
    systems: ['PC'],
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1470',
  },
];