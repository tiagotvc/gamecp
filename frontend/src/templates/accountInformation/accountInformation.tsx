import "./styles.scss";

export const AccountInformation = () => {
  console.log("entrouuuuu");
  return (
    <div className="account-information-container">
      <div className="account-login-information">
        <div className="account-login-information-text">
          <span>User: Tiagokill</span>
          <span>Last login: Thu, 05 Oct 2023 12:43 PM</span>
          <span className="kave-line">IP Address:</span>
          <span className="kave-line">Bank password:</span>
          <span className="kave-line">Pin:</span>
          <span className="kave-line">Rank Cp race:</span>
          <span className="kave-line">Rank Cp world:</span>
          <span className="kave-line">Rank Achievements:</span>
          <span className="kave-line">Rank Battle pass:</span>
        </div>
      </div>
    </div>
  );
};
