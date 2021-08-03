import React, { ReactElement } from "react";

import IWeeklyPinnedCard from "./interface";

const WeeklyPinnedCard = (props: IWeeklyPinnedCard): ReactElement => {
  const { icon, title, date, time, children, onClick } = props;
  return (
    <div
      className="flex flex-row p-7 items-center rounded-xl hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl text-[#7e6cb9]">{title}</p>
          {!time && <p>{date}</p>}
        </div>
        {time && (
          <div>
            {date} - {time}
          </div>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};
