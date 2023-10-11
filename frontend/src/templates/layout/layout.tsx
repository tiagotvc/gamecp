import React from "react";
import "./styles.scss";
import selectedImg from "./images/SciFi_Circle01Cyan_02.png";
import spin from "./images/Icon_MenuIcon08_Spin.png";
import shop from "./images/shop.png";
import { GiSwitchWeapon, GiBattleGear, GiCrossedSwords } from "react-icons/gi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";

export const LayoutPage = () => {
  const options = [
    {
      option: <GiCrossedSwords color="#4e809f" size={"2rem"} />,
      id: "1",
    },
    {
      option: <GiBattleGear color="#4e809f" size={"2rem"} />,
      id: "2",
    },
    {
      option: <img src={shop} alt=""/>,
      id: "3",
    },
    {
      option: <GiSwitchWeapon color="#4e809f" size={"2rem"} />,
      id: "4",
    },
    {
      option: <img src={spin} alt=""/>,
      id: "5",
    },
    {
      option: "Change race",
      id: "6",
    },
    {
      option: <BiDownload color="#4e809f" size={"2rem"} />,
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
