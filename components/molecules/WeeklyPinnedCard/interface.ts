import { ReactElement } from "react";

import { OnClick } from "type";

export default interface IWeeklyPinnedCard {
  icon: ReactElement;
  title: string;
  time?: string;
  date?: string;
  label?: ReactElement;
  children?: ReactElement | string;
  onClick?: OnClick;
}
