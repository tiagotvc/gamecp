import React from "react";
import { Alert } from "./Alert/Alert";
import { IconProps } from "../../shared/interfaces/interface";
import { Close } from "./Close/Close";
import { Sucess } from "./Sucess/Sucess";


export const Icon: React.FC<IconProps> = ({ iconName }) => {
  let icon: React.ReactNode = <Alert />;

  switch (iconName) {
    case "Alert":
      icon = <Alert />;
      break;
    case "Close":
      icon = <Close />;
      break;
    case "Sucess":
      icon = <Sucess />;
      break;
    default:
      icon = <Alert />;
  }
  return icon;
};