import { css, styled } from "styled-components";
import { SnackbarStyleProps } from "./snackbar.utils";

const typeStyles = {
  sucess: () => css`
    background: #2e7d32;
  `,
  error: () => css`
    background: #ff355e;
  `,
};

export const Container = styled('div')<SnackbarStyleProps>`
  ${({ type }) => css`
    display: flex;
    width: 764px;
    height: 48px;
    border: 1px solid lightgrey;
    position: absolute;
    background: white;
    right: 20px;
    top: 20px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 15px 0 15px;
    color: white;
    font-size: 20px;
    ${typeStyles[type]}

    > div {
      cursor: pointer;
    }
  `}
`;