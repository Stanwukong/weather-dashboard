import { WeatherData } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMonth() {
  const date = new Date()
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.toLocaleString("default", { weekday: "long" })
  const num = date.getDate()
  return { date, month, day, num }
}

export function WeatherDetails(data: WeatherData) {
  const details = [
    {
      label: 'Real Feel',
      value: Math.round(data?.main?.feels_like ?? 0),
      unit: '°C'
    },
    {
      label: 'Humidity',
      value: data?.main?.humidity ?? 0,
      unit: '%'
    },
    {
      label: 'Pressure',
      value: data?.main?.pressure ?? 0,
      unit: 'mbar'
    },
    {
      label: 'Wind',
      value: Math.round(data?.wind?.speed ?? 0),
      unit: 'km/h'
    }
  ];

  return details
}