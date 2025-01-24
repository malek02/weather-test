import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCity } from '../store/weatherSlice';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSelectedCity(search.trim()));
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center gap-2">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a city..."
          className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          variant="default"
          className="bg-gray-900 text-white hover:bg-gray-800"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
}
