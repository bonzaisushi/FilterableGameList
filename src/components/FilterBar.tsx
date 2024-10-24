import React from 'react';
import { System } from '../types';

interface FilterBarProps {
  systems: System[];
  selectedSystems: System[];
  minRating: number;
  dateRange: { start: string; end: string };
  onSystemChange: (system: System) => void;
  onRatingChange: (rating: number) => void;
  onDateChange: (type: 'start' | 'end', value: string) => void;
}

export function FilterBar({
  systems,
  selectedSystems,
  minRating,
  dateRange,
  onSystemChange,
  onRatingChange,
  onDateChange,
}: FilterBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Systems</h3>
          <div className="flex flex-wrap gap-2">
            {systems.map((system) => (
              <button
                key={system}
                onClick={() => onSystemChange(system)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedSystems.includes(system)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {system}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Minimum Rating</h3>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => onRatingChange(parseFloat(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{minRating} stars</div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Release Date Range</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => onDateChange('start', e.target.value)}
              className="px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => onDateChange('end', e.target.value)}
              className="px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}