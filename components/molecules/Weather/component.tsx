import React, { ReactElement } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import { useTime } from "hooks";

const Weather = (): ReactElement => {
  const { time } = useTime();
  return (
    <div className="inline-flex flex-col p-5 gap-3 rounded-2xl bg-secondary">
      <div className="flex flex-row gap-8 justify-between">
        <p className="text-[#2C2543] text-4xl">{time}</p>
        <div className="h-4 w-4 text-[#D8D8D8]">
          <MenuIcon />
        </div>
      </div>
      <div className="flex flex-row gap-5">ab</div>
    </div>
  );
};

export default Weather;
