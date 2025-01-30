import React from "react";

type Props = {
  children: React.ReactNode;
};

const DetailsWrapper = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 w-full md:grid-cols-4 border border-neutral-400 divide-neutral-400 divide-x divide-y">
        {children}
      </div>
    </div>
  );
};

export default DetailsWrapper;
