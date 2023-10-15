import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles.scss";
import selectedImg2 from "./images/Icon1-2-1.png";
import selectedImg3 from "./images/Icon1-2-3.png";
import spin from "./images/Icon_MenuIcon08_Spin.png";
import shop from "./images/shop.png";
import { GiSwitchWeapon, GiBattleGear, GiCrossedSwords } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { BiDownload } from "react-icons/bi";
import { AccountInformation } from "../accountInformation/accountInformation";
import { LuckWell } from "../luckweel/luckWeel";

export const LayoutPage = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [mobileMenu, toogleMobileMenu] = useState(false);
  const url = window.location.pathname;
  const navigate = useNavigate();

  const onClickMobileMenu = () => {
    toogleMobileMenu(true);
  }
  const onCloseMobileMenu = () => {
    toogleMobileMenu(false);
  }

  const onTabClick = (url: string) => {
    navigate(`/dashboard/${url}`);
  };

  const onMobileTabClick = (url: string) => {
    onCloseMobileMenu()
    navigate(`/dashboard/${url}`);
  }

  useEffect(() => {
    console.log(url);
    setActiveTab(url);
  }, [url]);
  const options = [
    {
      option: <GiCrossedSwords color="#4e809f" size={"2rem"} />,
      id: "1",
      url: "accountinfo",
      mobile:"Account info",
    },
    {
      option: <GiBattleGear color="#4e809f" size={"2rem"} />,
      id: "2",
      url: "battlepass",
      mobile:"Battle pass",
    },
    {
      option: <img src={shop} alt="" />,
      id: "3",
      url: "market",
      mobile:"Market",
    },
    {
      option: <GiSwitchWeapon color="#4e809f" size={"2rem"} />,
      id: "4",
      url: "exchange",
      mobile:"Item Exchange",
    },
    {
      option: <img src={spin} alt="" />,
      id: "5",
      url: "luckweel",
      mobile:"Luck weel",
    },
    {
      option: "Change race",
      id: "6",
      url: "changerace",
      mobile:"Change race",
    },
    {
      option: <BiDownload color="#4e809f" size={"2rem"} />,
      id: "7",
      url: "downloads",
      mobile: "Downloads",
    },
  ];
  return (
    <div className="container-content">
      <div className="container">
        <div className={`${mobileMenu ? "container-navbar-mobile-active" : "container-navbar-mobile"}`}>
        <ul>
            {options.map((item) => (
           <li onClick={() => onMobileTabClick(item.url)}>{item.mobile}</li>
            ))}
            <FaWindowClose className="hamburguer-menu" color="#4e809f" size={"2rem"} onClick={onCloseMobileMenu}/>
          </ul>
        </div>
        <div className="container-navbar">
          <ul>
            {options.map((item) => (
              <div
                className={`navbar-li${
                  activeTab === `/dashboard/${item.url}` ? " active" : ""
                }`}
                key={item.id}
                onClick={() => onTabClick(item.url)}
              >
                <img
                  src={selectedImg3}
                  alt="selected"
                  id={item.id}
                  className={`${
                    activeTab === `/dashboard/${item.url}`
                      ? "image-active"
                      : "image-inactive"
                  } selected-outer`}
                ></img>
                <img
                  src={selectedImg2}
                  alt="selected"
                  id={item.id}
                  className={`${
                    activeTab === `/dashboard/${item.url}`
                      ? "image-active"
                      : "image-inactive"
                  } selected-mid`}
                ></img>
                {/* <img src={selectedImg} alt="selected" id={item.id} className="selected-inside"></img> */}
                <div className="icon-option">{item.option}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="title-container">
        <div className="title-container-content">
          <div className="title-container-div">
          <HiMenu className="hamburguer-menu" color="#4e809f" size={"2rem"} onClick={onClickMobileMenu}/>
            {url === "/dashboard/battlepass" && <span>Battle pass</span>}
            {url === "/dashboard/market" && <span>Market</span>}
            {url === "/dashboard/exchange" && <span>Exchange</span>}
            {url === "/dashboard/luckweel" && <span>Luck weel</span>}
            {url === "/dashboard/downloads" && <span>Downloads</span>}
            {url === "/dashboard/changerace" && <span>Change race</span>}
            {url === "/dashboard/accountinfo" && <span>Account info</span>}
          </div>
        </div>
        <div className="container-routes">
          <Routes>
            <Route path="/accountinfo" element={<AccountInformation />} />
            <Route path="/luckweel" element={<LuckWell />} />
            <Route path="/market" element={<AccountInformation />} />
            <Route path="/exchange" element={<AccountInformation />} />
            <Route path="/download" element={<AccountInformation />} />
            <Route path="/battlepass" element={<AccountInformation />} />
            <Route path="/changerace" element={<AccountInformation />} />
            <Route path="/market" element={<AccountInformation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
