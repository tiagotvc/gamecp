import React from "react";
import "./styles.scss";
import selectedImg from "./images/SciFi_Circle01Cyan_02.png";

export const LayoutPage = () => {
  const options = [
    {
      option: "Market",
      id: "1",
    },
    {
      option: "Character",
      id: "2",
    },
    {
      option: "Luck Weel",
      id: "3",
    },
    {
      option: "Exchange item",
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
      option: "Downloads",
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
              <span id={item.id}>{item.option}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
