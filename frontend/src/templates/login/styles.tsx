import styled, { css } from "styled-components";
import portugueseFlag from "./images/flagbr.svg";

export const Container = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .container-content {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    
      .login-forgot-password {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 45px;
        text-align: center;
        
        > a {
          color: #2be4ea;
          text-transform: uppercase;
          font-size: 12px;
        }
      }

      .gamecp-name {
        width: 100%;
        text-align: center;
        > h1 {
          color: rgba(0, 214, 252, 0.5);
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          font-weight: normal;
          letter-spacing: 1.8px;
          font-size: 3em;
          text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
        }

        &::after {
          display: table;
    content: "";
    clear: both;
          width: 100%;
    height: 50px;
    background-image: url(https://i.imgur.com/9EfnzaH.png);
    background-repeat: no-repeat;
    background-position: center 0px;
        }
      }

      .gamecp-name::after {
        

      }

      .login-username-input {
        display: flex;
        margin-top: 20px;
        height: 50px;
      }

      .login-password-input {
        display: flex;
        margin-top: 10px;
        height: 50px;
      }

      .login-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-top: 7px;
        width: 270px;
      }

      .hidde-svg {
        display: none;
      }
    }
  `
);
