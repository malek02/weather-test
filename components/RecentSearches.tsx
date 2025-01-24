import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSelectedCity, clearHistory } from '../store/weatherSlice';
import { Button } from './ui/button';
import { History, Trash2 } from 'lucide-react';

export default function RecentSearches() {
  const recentSearches = useSelector((state: RootState) => state.weather.recentSearches);
  const dispatch = useDispatch();

  if (recentSearches.length === 0) return null;

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between text-gray-600 mb-3">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4" />
          <h3 className="text-sm font-medium">Recent Searches</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-red-600 hover:bg-red-50"
          onClick={() => dispatch(clearHistory())}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((city) => (
          <Button
            key={city}
            onClick={() => dispatch(setSelectedCity(city))}
            variant="outline"
            size="sm"
            className="bg-white text-gray-900 hover:bg-gray-50 border-gray-200 transform hover:-translate-y-0.5 transition-all"
          >
            {city}
          </Button>
        ))}
      </div>
    </div>
  );
}
