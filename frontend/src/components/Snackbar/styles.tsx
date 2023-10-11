import { css, styled } from "styled-components";
import { SnackbarStyleProps } from "./snackbar.utils";
import warning from "./images/warning.png";
import sucess from "./images/sucess.png";
import info from "./images/info.png";
import sucessClose from "./images/sucess_close.png";
import errorClose from "./images/error_close.png";
import infoClose from "./images/sucess_close.png";

const typeStyles = {
  sucess: () => css`
    background-image: url(${sucess});
    height: 65px;
    color: #208607;
  `,
  error: () => css`
    background-image: url(${warning});
    height: 65px;
    color: #f62809;
  `,
  info: () => css`
    background-image: url(${info});
    height: 48px;
    color: rgba(0, 214, 252, 1);
  `,
};

const closeStyles = {
  sucess: () => css`
    background-image: url(${sucessClose});
    transform: rotate(45deg);
    width: 30px;
    height: 30px;
    top: 6px;
  `,
  error: () => css`
    background-image: url(${errorClose});
    width: 40px;
    height: 40px;
    top: -5px;
  `,
  info: () => css`
    background-image: url(${infoClose});
    width: 35px;
    height: 35px;
    top: -8px;
  `,
};

export const Container = styled("div")<SnackbarStyleProps>`
  ${({ type }) => css`
    display: flex;
    width: 225px;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 15px 0 15px;
    color: rgba(0, 214, 252, 1);
    font-size: 14px;
    background-position: center;
    background-size: cover;
    ${typeStyles[type]}
    z-index: 99999;

    .close {
      position: absolute;
      cursor: pointer;
      ${closeStyles[type]}
      background-position: center;
      background-size: cover;
      right: 0;
    }
  `}
`;
