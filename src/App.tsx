import React, { useState, useMemo, useEffect } from 'react';
import { GameCard } from './components/GameCard';
import { GameList } from './components/GameList';
import { FilterBar } from './components/FilterBar';
import { ViewToggle } from './components/ViewToggle';
import { ThemeToggle } from './components/ThemeToggle';
import { mockGames } from './data/mockGames';
import { System, ViewMode, Theme } from './types';
import { Gamepad2 } from 'lucide-react';

function App() {
  const [selectedSystems, setSelectedSystems] = useState<System[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [theme, setTheme] = useState<Theme>('light');
  const [dateRange, setDateRange] = useState({
    start: '2022-01-01',
    end: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const systems: System[] = ['PC', 'PlayStation', 'Xbox'];

  const filteredGames = useMemo(() => {
    return mockGames.filter((game) => {
      const matchesSystem =
        selectedSystems.length === 0 ||
        game.systems.some((sys) => selectedSystems.includes(sys));
      const matchesRating = game.rating >= minRating;
      const gameDate = new Date(game.releaseDate);
      const matchesDate =
        gameDate >= new Date(dateRange.start) &&
        gameDate <= new Date(dateRange.end);

      return matchesSystem && matchesRating && matchesDate;
    });
  }, [selectedSystems, minRating, dateRange]);

  const handleSystemToggle = (system: System) => {
    setSelectedSystems((prev) =>
      prev.includes(system)
        ? prev.filter((s) => s !== system)
        : [...prev, system]
    );
  };

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    setDateRange((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Game Library</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onThemeChange={setTheme} />
            <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
          </div>
        </div>

        <FilterBar
          systems={systems}
          selectedSystems={selectedSystems}
          minRating={minRating}
          dateRange={dateRange}
          onSystemChange={handleSystemToggle}
          onRatingChange={setMinRating}
          onDateChange={handleDateChange}
        />

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <GameList games={filteredGames} />
        )}

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No games found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;