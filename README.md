# Weather App

A modern weather application built with Next.js 14, Redux, and Tailwind CSS. Get real-time weather information for any city with a beautiful, responsive interface.

## Features

- 🌤️ Real-time weather data using OpenWeather API
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- 🔍 Search for any city worldwide
- 📖 Recent searches history
- 🌙 Weather condition icons
- 📊 Detailed weather information including temperature, humidity, and wind speed

## Technologies Used

- Next.js 14
- Redux Toolkit for state management
- React Query for data fetching
- Tailwind CSS for styling
- shadcn/ui for UI components
- TypeScript for type safety

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/malek02/weather-test.git
   ```

2. Install dependencies:
   ```bash
   cd weather-test
   npm install
   ```

3. Create a `.env.local` file and add your OpenWeather API key:
   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - React components
- `/store` - Redux store configuration and slices
- `/services` - API services
- `/enums` - TypeScript enums for weather conditions
- `/public/images` - Weather icons and images

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License
