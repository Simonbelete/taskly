import React, { ReactElement } from "react";

import ILabel from "./interface";

const Label = (props: ILabel): ReactElement => {
  const { children } = props;
  return (
    <div className="inline-flex items-center rounded-2xl text-white px-5 py- text-sm  bg-[#F4B860] dark:bg-dark-primary dark:border dark:border-dark-secondary">
      {children}
    </div>
  );
};

export default Label;
