import Button from "../Button/button";
import { Container } from "./styles";
import React, { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <Container active={active}>
      {/* <button onClick={() => setActive(!active)}>
        <span>Downloads</span>
      </button> */}
   
      <div className="dropdown">
        <ul>
          <li>Cliente 4.15</li>
          <li>Patch 1.0</li>
          <li>Patch 1.1</li>
        </ul>
      </div>
      <div className="hidde-svg">
        <svg>
          <filter id="fireButton">
            <feTurbulence
              id="turbulance"
              baseFrequency="0.09 0.09"
              numOctaves="2"
              seed="3"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.1 0.1;0.12 0.12"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
        </svg>
      </div>
    </Container>
  );
};
