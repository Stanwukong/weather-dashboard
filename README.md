# Weather Dashboard

A Next.js application that allows users to search for and view current weather conditions in cities worldwide. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🔍 City-based weather search
- 🌡️ Real-time weather data display
- 📱 Responsive design for mobile and desktop
- 🗂️ Search history tracking
- ⚡ Server-side rendering for optimal performance
- 🛠️ TypeScript for type safety
- 🎨 Clean UI with Tailwind CSS

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16.8 or higher)
- npm (v7 or higher)

You will also need:
- An OpenWeatherMap API key (get one at [OpenWeatherMap](https://openweathermap.org/api))

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Stanwukong/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
weather-dashboard/
    ├── app/                    # Next.js 15+ app directory
    ├── components/             # React components
    ├── lib/                    # Utilities
    └── hooks/                  # Custom React hooks
    ├── public/                 # Static files
    └── [Configuration files]
```

## Assumptions Made

1. API and Data:
   - OpenWeatherMap API is used as the weather data source
   - Temperature is displayed in Celsius
   - Weather icons are sourced directly from OpenWeatherMap
   - API responses are consistent with the defined interfaces

2. User Experience:
   - Users have a stable internet connection
   - Users primarily search by city name
   - Search history should persist between sessions
   - Mobile users form a significant portion of the user base

3. Technical:
   - Modern browser support is required (ES6+ features)
   - Local storage is available and enabled
   - Environment variables are properly configured
   - Server-side rendering is preferred for initial data fetch

4. Performance:
   - Weather data is fetched on-demand rather than cached
   - Search history is stored locally rather than in a database
   - API rate limits are handled by the frontend

## Error Handling

The application handles several error cases:
- Invalid city names
- API connection failures

## Development Decisions

1. Next.js App Router:
   - Utilized for better SEO and performance
   - Enables server-side rendering of weather data
   - Provides clean URL structure (/weather/[city])

2. TypeScript:
   - Ensures type safety across the application
   - Improves development experience with better IDE support
   - Reduces potential runtime errors

3. Tailwind CSS:
   - Enables rapid UI development
   - Ensures consistent styling
   - Provides excellent responsive design utilities

4. Local Storage:
   - Used for search history persistence
   - Provides quick access to previous searches
   - Reduces server load

## Future Improvements

Possible enhancements that could be added:
- Weather forecasts for upcoming days
- Geolocation support
- Unit conversion (Celsius/Fahrenheit)
- More detailed weather information
- Weather alerts and notifications
- City autocomplete suggestions
- Dark mode support
- Favorite cities feature

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
