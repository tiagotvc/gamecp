import styled, { css } from "styled-components";
import titlebg from "../login/images/titlebackground.png";

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

      .gamecp-name {
      
      text-align: center;
      background-image: url(${titlebg});
      background-position: center;
      background-size: cover;
      > h1 {
        color: rgba(0, 214, 252, 0.5);
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing: 1.8px;
        font-size: 2.1em;
        text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
      }
    }

    }

      .recoverpass {
        display: flex;
        margin-top: 25px;
        height: 50px;
      }

      .studio-name {
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

        > p {
          color: orange;
        }
      }

      .login-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-top: 7px;
        width: 270px;
      }

      .redirect-to-signin {
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

      .hidde-svg {
        display: none;
      }
    }
  `
);
