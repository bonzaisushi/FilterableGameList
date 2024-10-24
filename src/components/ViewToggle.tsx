import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { ViewMode } from '../types';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded ${
          currentView === 'grid'
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="text-sm font-medium">Grid</span>
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded ${
          currentView === 'list'
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <List className="w-4 h-4" />
        <span className="text-sm font-medium">List</span>
      </button>
    </div>
  );
}