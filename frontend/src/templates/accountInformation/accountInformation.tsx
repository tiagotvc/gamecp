import React from "react"
import { Inventory } from "../../components/Inventory/inventory";
import "./styles.scss";

export const AccountInformation = () => {
  console.log("entrouuuuu");
  return (
    <div className="account-information-container">
      <div className="account-login-information">
        <div className="account-login-information-text">
          <span>User: Tiagokill</span>
          <span>Last login: Thu, 05 Oct 2023 12:43 PM</span>
          <span>IP Address:</span>
          <span>Bank password:</span>
          <span>Pin:</span>
          <span>Rank Cp race:</span>
          <span>Rank Cp world:</span>
          <span>Rank Achievements:</span>
          <span>Rank Battle pass:</span>
        </div>
      </div>
      <Inventory/>
    </div>
  );
};
