import styled, { css } from "styled-components";
import portugueseFlag from './images/flagbr.svg'

export const Container = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1f1204e0;

    .container-content {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;


      .language-choose {
        display: flex;
       
        .portuguese, .espanol, .english {
            width: 60px;
            border-radius: 50%;
            height: 50px;
            background-color: #1f1204e0;
            margin-right: 25px;
            cursor: pointer;
            image-rendering:optimizeQuality;
            
            &:hover {
                box-shadow: 0 0 3px orange;
            }
        }

        .portuguese {
            background-image: url(${portugueseFlag});
        }
      }

      .login-forgot-password {
        margin-top: 25px;
        text-align: center;
        > a {
            color: orange;
            text-transform: uppercase
        }
      }

      .gamecp-name {
        text-align: center;
        filter: url("#fire");
        > h1 {
          color: #fbfbb0;
          font-size: 3.2em;
          font-weight: 600;
          letter-spacing: 0.1em;
          -webkit-box-reflect: below -15px linear-gradient(transparent, #0002);
          text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 40px orange,
            0 0 60px orange, 0 0 120px orange;
        }
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
