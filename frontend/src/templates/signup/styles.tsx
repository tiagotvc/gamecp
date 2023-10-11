import styled, { css } from "styled-components";

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
      
        > h1 {
            color: #2be4ea;
          font-size: 3.2em;
          font-weight: 600;
          letter-spacing: 0.1em;
        }
      }

      .signup {
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

      .redirect-to-signin {
        margin-top: 25px;
        text-align: center;
        > a {
            color: orange;
            text-transform: uppercase
        }
      }

      .hidde-svg {
        display: none;
      }
    }
  `
);
