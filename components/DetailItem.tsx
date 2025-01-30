import React from "react";

type Props = {
  item: {
    label: string;
    value: number;
    unit: string;
  };
};

const DetailItem = ({ item }: Props) => {
  return (
    <div className="p-8 flex flex-col text-black w-full">
      <span className="text-gray-600 font-semibold mb-1">{item.label}</span>
      <div className="flex items-baseline">
        <span className="text-5xl font-medium text-gray-900">{item.value}</span>
        <span className="text-gray-500 text-sm ml-1">{item.unit}</span>
      </div>
    </div>
  );
};

export default DetailItem;
