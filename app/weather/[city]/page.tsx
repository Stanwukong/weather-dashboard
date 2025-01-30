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
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`
  );
  const weatherData: WeatherData = await response.json();
  const details = await WeatherDetails(weatherData);
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
