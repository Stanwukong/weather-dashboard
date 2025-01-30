export interface WeatherData {
  name: string;
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    pressure: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];

  wind: {
    deg: number;
    speed: number;
  };
}

export interface ApiResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}
