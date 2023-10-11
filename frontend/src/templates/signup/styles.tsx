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

      .signup {
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
      }

      .kave {
    &-btn {
        margin-top: 25px;
      position: relative;
      border: solid 1px rgba(0, 214, 252, 0.3);
      background: none;
      color: rgba(0, 214, 252, 0.5);
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      font-weight: normal;
      letter-spacing: 1.8px;
      width: 200px;
      height: 40px;
      padding: 0;
      transition: all 0.25s ease;
      outline: none;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 10%;
        width: 60px;
        height: 1px;
        transform: translateY(-1px);
        background: rgba(0, 214, 252, 1);
        transition: all 0.25s ease;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 10%;
        width: 60px;
        height: 1px;
        transform: translateY(1px);
        background: rgba(0, 214, 252, 1);
        transition: all 0.25s ease;
      }
      &:hover {
        box-shadow: 1px 1px 8px rgba(0, 214, 252, 0.3);
        color: rgba(0, 214, 252, 1);
        text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
        &.kave-btn:before {
          left: 0;
          width: 20px;
        }
        &.kave-btn:after {
          right: 0;
          width: 20px;
        }
        .kave-line:before {
          bottom: 0;
        }
        .kave-line:after {
          top: 0;
        }
      }
    }
    &-line {
      &:before {
        content: "";
        position: absolute;
        bottom: 30%;
        right: 0;
        width: 1px;
        height: 20px;
        transform: translateX(1px);
        background: rgba(0, 214, 252, 1);
        transition: all 0.25s ease;
      }
      &:after {
        content: "";
        position: absolute;
        top: 30%;
        left: 0;
        width: 1px;
        height: 20px;
        transform: translateX(-1px);
        background: rgba(0, 214, 252, 1);
        transition: all 0.25s ease;
      }
    }
  }
    }
  `
);
