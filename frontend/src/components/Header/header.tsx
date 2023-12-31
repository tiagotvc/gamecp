/* eslint-disable react-hooks/exhaustive-deps */
// import Button from "../Button/button";

import { Navbar } from "../Navbar/navbar";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);
 

  return (
    <Container active={active}>
    
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
