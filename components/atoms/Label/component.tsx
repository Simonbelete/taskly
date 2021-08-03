import React, { ReactElement } from "react";

import ILabel from "./interface";

const Label = (props: ILabel): ReactElement => {
  const { children } = props;
  return (
    <div className="flex items-center rounded-2xl bg-repeat-round dark:bg-dark-primary">
      {children}
    </div>
  );
};

export default Label;
