import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getWeatherByCity } from '../services/weatherApi';
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Droplets, Wind } from 'lucide-react';
import { WeatherCondition, getWeatherImage } from '../enums/weather.enum';

export default function WeatherDisplay() {
  const selectedCity = useSelector((state: RootState) => state.weather.selectedCity);

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ['weather', selectedCity],
    queryFn: () => getWeatherByCity(selectedCity),
    enabled: !!selectedCity,
  });

  if (!selectedCity) {
    return (
      <Card className="mt-10 bg-white border-gray-200 text-gray-500">
        <CardContent className="pt-6 text-center">
          Enter a city name to check the weather
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-10">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="mt-10 bg-red-50 border-red-200 text-red-600">
        <CardContent className="pt-6 text-center">
          Error fetching weather data. Please try again.
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;
  
  const weatherCondition = weather.weather[0].description as WeatherCondition;

  return (
    <Card className="mt-8 bg-white border-gray-200 text-gray-900 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl text-gray-900">
          {weather.name}, {weather.sys.country}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-end gap-4">
              <p className="text-6xl font-bold text-gray-900">
                {Math.round(weather.main.temp)}°C
              </p>
              <p className="text-xl mb-2 text-gray-600">
                Feels like {Math.round(weather.main.feels_like)}°C
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src={getWeatherImage(weatherCondition)}
                alt={weatherCondition}
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
            <p className="text-xl capitalize mt-2 text-gray-700">
              {weatherCondition}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-gray-500 text-sm">Humidity</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {weather.main.humidity}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Wind className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-gray-500 text-sm">Wind Speed</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
