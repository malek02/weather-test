'use client';

import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import RecentSearches from '../components/RecentSearches';

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 drop-shadow-lg">
            Weather Forecast
          </h1>
          <p className="text-gray-600 text-lg">
            Check the weather anywhere in the world
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 shadow-xl border border-gray-200">
          <div className="flex flex-col items-center space-y-6">
            <SearchBar />
            <RecentSearches />
          </div>
          <WeatherDisplay />
        </div>
      </div>
    </main>
  );
}
