import React, { ReactElement } from "react";

import IWeeklyPinnedCard from "./interface";

const WeeklyPinnedCard = (props: IWeeklyPinnedCard): ReactElement => {
  const { icon, title, date, time, label, children, onClick } = props;
  return (
    <div
      className="inline-flex flex-row p-7 gap-10 items-start rounded-2xl hover:shadow-sm"
      onClick={onClick}
    >
      <div className="mt-2">{icon}</div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl font-bold text-[#2C2543]">{title}</p>
          {!time && <p>{date}</p>}
        </div>
        {time && (
          <div className="text-[#2C2543]">
            {date} - {time}
          </div>
        )}
        {label && <div className="mt-2">{label}</div>}
        {children && <div className="mt-5 text-sm">{children}</div>}
      </div>
    </div>
  );
};

export default WeeklyPinnedCard;
