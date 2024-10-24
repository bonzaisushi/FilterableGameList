import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={game.coverUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 dark:text-white">{game.title}</h3>
        <div className="flex items-center gap-1 mb-2">
          {renderStars(game.rating)}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {game.systems.map((system) => (
            <span
              key={system}
              className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {system}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Released: {new Date(game.releaseDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}