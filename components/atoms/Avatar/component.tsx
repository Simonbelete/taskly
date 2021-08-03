/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";

import IAvatar, { defaultProps } from "./interface";

const Avatar = (props: IAvatar & typeof defaultProps): ReactElement => {
  const { url, alt } = props;
  return (
    <div className="flex items-center justify-center rounded-lg w-[45px] h-[45px] bg-primary dark:bg-dark-primary dark:border dark:border-dark-secondary">
      <img src={url} className="w-10 h-10" alt={alt} />
    </div>
  );
};

Avatar.defaultProps = defaultProps;
export default Avatar;
