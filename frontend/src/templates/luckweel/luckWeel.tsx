import "./styles.scss";
import luckweel01 from "./images/luckweel01.png";
import luckweel02 from "./images/luckweel02.png";
import luckweel03 from "./images/luckweel03.png";
import luckweel04 from "./images/luckweel04.png";
import btnluckweel01 from "./images/btnluckweel01.png";
import btnluckweel02 from "./images/btnluckweel02.png";
import video from "./images/video.png";

export const LuckWell = () => {
  const particles = Array.from(Array(150).keys());
  return (
    <div className="luck-weel-container">
        <div className="header">
            <span className="title">Daily free luck weel</span>
            <span className="subtitle">Get 3 free spins for day</span>
        </div>
      {particles.map((each: any) => (
        <div className="luck-weel-container-bg">
          <div className="circle" />
        </div>
      ))}
      <div className="luck-weel-container-weel">
        <img src={luckweel01} alt="luck-weel-1" />
        <img src={luckweel02} alt="luck-weel-2" />
        <img src={luckweel03} alt="luck-weel-3" />
        <img src={luckweel04} alt="luck-weel-4" />
        <img src={btnluckweel01} alt="btn-luck-weel-1" />
        <img src={btnluckweel02} alt="btn-luck-weel-1" />
        <button className="recharg">
        <img src={video} alt="video" className="video-img"/>
          <span>Recharg</span>
          <div className="p-recharg">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </button>
        
      </div>
    </div>
  );
};
