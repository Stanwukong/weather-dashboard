import { getMonth } from "@/lib/utils";
import { WeatherData } from "@/types";
import Image from "next/image";
import React from "react";
import { FaTreeCity } from "react-icons/fa6";

type Props = {
  data: WeatherData;
};

const WeatherCard = ({ data }: Props) => {

    const { name, main, coord, weather, wind } = data;

    const { date, month, day, num } = getMonth();
    console.log(month, day);
  console.log(data);
  return (
    <div className="flex text-black flex-col items-center p-6 w-full">
      <section className="flex w-full justify-between items-center">
        <div className="flex space-x-2 items-center text-lg">
          <span className="py-2 pr-2">
            <FaTreeCity size={30}/>
          </span>
          <p className="">{name}</p>
        </div>

        <div className="flex items-center space-x-2  text-lg">
          <Image
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="icon"
            height={50}
            width={50}
          />
          <p className="text-black capitalize">{weather[0].main}</p>
        </div>
      </section>

      <section className="flex flex-col w-full py-6">
        <p className="text-black">{`${day} --- ${num} ${month}`}</p>
        <p className="text-center font text-9xl p-8">{main.temp.toFixed()}&deg;C</p>
      </section>

      <section className="w-full flex justify-between">
        <p className="capitalize text-center">{weather[0].description}</p>
        <p className="text-center">{main.temp_max}&deg;C -- {main.temp_min}&deg;C</p>
      </section>
    </div>
  );
};

export default WeatherCard;
