import DetailItem from "@/components/DetailItem";
import DetailsWrapper from "@/components/DetailsWrapper";
import WeatherCard from "@/components/WeatherCard";
import { WeatherDetails } from "@/lib/utils";
import { WeatherData } from "@/types";
import React from "react";

type Props = {
  params: Promise<{ city: string }>;
};

const CityDashboard = async ({ params }: Props) => {
  const { city } = await params;
  let weatherData: WeatherData | null = null;
  let details = [];

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    weatherData = await response.json();
    details = await WeatherDetails(weatherData!);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-700">
          Unable to load weather data for {city}
        </p>
      </div>
    );
  }

  if (!weatherData || !details) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-700">No weather data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-300 justify-between w-full">
      <WeatherCard data={weatherData} />
      <DetailsWrapper>
        {details.map((item) => (
          <DetailItem key={item.label} item={item} />
        ))}
      </DetailsWrapper>
    </div>
  );
};

export default CityDashboard;