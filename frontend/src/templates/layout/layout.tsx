import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./styles.scss";
import selectedImg from "./images/Icon1-2-2.png";
import selectedImg2 from "./images/Icon1-2-1.png";
import selectedImg3 from "./images/Icon1-2-3.png";
import spin from "./images/Icon_MenuIcon08_Spin.png";
import shop from "./images/shop.png";
import { GiSwitchWeapon, GiBattleGear, GiCrossedSwords } from "react-icons/gi";
import { BiDownload } from "react-icons/bi";

export const LayoutPage = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const url = window.location.pathname;
  const navigate = useNavigate()

  const onTabClick = (url: string) => {
    navigate(`/dashboard/${url}`);
  }

  useEffect(() => {
    console.log(url)
    setActiveTab(url);
  }, [url]);
  const options = [
    {
      option: <GiCrossedSwords color="#4e809f" size={"2rem"} />,
      id: "1",
      url: "person"
    },
    {
      option: <GiBattleGear color="#4e809f" size={"2rem"} />,
      id: "2",
      url: "/dashboard2"
    },
    {
      option: <img src={shop} alt="" />,
      id: "3",
      url: "/dashboard3"
    },
    {
      option: <GiSwitchWeapon color="#4e809f" size={"2rem"} />,
      id: "4",
      url: "/dashboard4"
    },
    {
      option: <img src={spin} alt="" />,
      id: "5",
      url: "/dashboard5"
    },
    {
      option: "Change race",
      id: "6",
      url: "/dashboard6"
    },
    {
      option: <BiDownload color="#4e809f" size={"2rem"} />,
      id: "7",
      url: "/dashboard7"
    },
  ];
  return (
    <div className="container">
      <div className="container-navbar">
        <ul>
          {options.map((item) => (
            <div className={`navbar-li${activeTab === `/dashboard/${item.url}` ? " active" : ""}`} key={item.id} onClick={() =>onTabClick(item.url)}>
              <img
                src={selectedImg3}
                alt="selected"
                id={item.id}
                className={`${activeTab === `/dashboard/${item.url}` ? "image-active" : "image-inactive"} selected-outer`}
              ></img>
              <img
                src={selectedImg2}
                alt="selected"
                id={item.id}
                className={`${activeTab === `/dashboard/${item.url}` ? "image-active" : "image-inactive"} selected-mid`}
              ></img>
              {/* <img src={selectedImg} alt="selected" id={item.id} className="selected-inside"></img> */}
              <div className="icon-option">{item.option}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
