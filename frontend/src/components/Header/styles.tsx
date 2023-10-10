import styled, { css } from "styled-components";
import bg from "./images/OLO2DS0.jpg";

interface HeaderProps {
    active: boolean;
}

export const Container = styled("div")<HeaderProps>(
  ({ theme, active }) => css`
    display: flex;
    width: 100%;
    height: 15px;
    justify-content: center;
    text-align:center;
    

    > span {
        color: #ffa6009e;
      text-shadow: 0 0 5px orange;
      font-weight: 600;
      margin-top: 10px;
    }

    .dropdown {
      display: flex;
      flex-direction: column;
      width: 150px;
      position: absolute;
      background: #fbfbb0;
      margin-top: ${active ? '50px' :'-120px'};
      margin-left: 10px;
      border-radius: 5px;
      background-image: url(${bg});
      background-position: center;
      background-size: cover;
      transition: ease-in-out 15ms;
      box-shadow: 0 0 1px orange, 0 0 1px orange, 0 0 2px orange,
        0 0 6px orange, 0 0 8px orange;

      > ul {
        list-style: none;
        color: #fbfbb0;
        font-size: 1em;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        text-align: justify;
      }
    }

    .hidde-svg {
      display: none;
    }

    > button {
      color: #fbfbb0;
      width: 150px;
      height: 40px;
      margin-top: 5px;
      margin-left: 10px;
      font-size: 1.3em;
      font-weight: 600;
      cursor: pointer;
      background-image: url(${bg});
      background-position: center;
      background-size: cover;
      box-shadow: 0 0 1px orange, 0 0 2px orange, 0 0 4px orange,
        0 0 10px orange, 0 0 12px orange;
      filter: url("#fireButton");
    }
  `
);
