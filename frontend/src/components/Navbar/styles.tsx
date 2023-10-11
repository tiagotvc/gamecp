import styled, { css } from "styled-components";
import bg from "../Header/images/OLO2DS0.jpg"

interface HeaderProps {
    active: boolean;
}

export const Container = styled("ul")(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 150px;
    color: white;
    list-style: none;
    margin-top: 25px;
   
    > li {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-right: 45px;
        width: 75px;
        height: 75px;
        transform: rotate(45deg);
        background-image: url(${bg});
        background-position: center;
        background-size: cover;
        box-shadow: 0 0 1px orange, 0 0 2px orange, 0 0 4px orange,
            0 0 10px orange, 0 0 12px orange;
        filter: url("#fireButton");

        
    }

    > span {
            color: white;
            font-weight: 600;
            position: absolute;
        }
    
  `
);
