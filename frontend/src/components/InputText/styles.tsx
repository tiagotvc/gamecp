import styled, { css } from "styled-components";

export const Container = styled("div")(
  ({ theme }) => css`
    position: relative;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > input {
      width: 100%;
      padding: 10px;
      background: #082430;
      border: 2px solid #29777b;
      border-radius: 5px;
      outline: none;
      color: #29777b;
      font-size: 1em;
      font-weight: 600;
      height: 25px;
      border: solid 1px rgba(0, 214, 252, 0.3);
    }

    > span {
      position: absolute;
      left: 0;
      padding: 10px;
      pointer-events: none;
      font-size: 1em;
      color: #29777b;
      text-transform: uppercase;
      text-align: center;
    }

    > input:valid ~ span,
    input:focus ~ span {
      color: rgba(0, 214, 252, 1);
      transform: translateX(1px) translateY(-24px);
      font-size: 0.7em;
      padding: 1px 10px;
      border-radius: 2px;
    }

    > input:valid,
    > input:focus {
      outline: #00d6b6;
      box-shadow: 1px 1px 8px rgba(0, 214, 252, 0.3);
      text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
    }
  `
);
