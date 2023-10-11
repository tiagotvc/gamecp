import React from "react";
import "./styles.scss";
import selectedImg from "./images/SciFi_Circle01Cyan_02.png";
import { GiSwitchWeapon, GiBattleGear, GiCrossedSwords } from "react-icons/gi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";

export const LayoutPage = () => {
  const options = [
    {
      option: <GiCrossedSwords color="#29777b" size={"2.5rem"} />,
      id: "1",
    },
    {
      option: <GiBattleGear color="#29777b" size={"2.5rem"} />,
      id: "2",
    },
    {
      option: <PiShoppingCartSimpleFill color="#29777b" size={"2.5rem"} />,
      id: "3",
    },
    {
      option: <GiSwitchWeapon color="#29777b" size={"2.5rem"} />,
      id: "4",
    },
    {
      option: "Change class",
      id: "5",
    },
    {
      option: "Change race",
      id: "6",
    },
    {
      option: <BiDownload color="#29777b" size={"2.5rem"} />,
      id: "7",
    },
  ];
  return (
    <div className="container">
      <div className="container-navbar">
        <ul>
          {options.map((item) => (
            <div className="li-div" key={item.id}>
              <img src={selectedImg} alt="selected" id={item.id}></img>
              <div className="icon-option">{item.option}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
