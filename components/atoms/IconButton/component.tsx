import React, { ReactElement } from "react";

import IIconButton from "./interface";

const IconButton = (props: IIconButton): ReactElement => {
  const { children } = props;
  return (
    <div className="flex items-center cursor-pointer hover:bg-primary hover:text-secondary p-1 h-6 w-6 text-[#2C2543] rounded-full bg-[#ECEFF2] dark:bg-dark-primary dark:text-dark-secondary">
      {children}
    </div>
  );
};

export default IconButton;
