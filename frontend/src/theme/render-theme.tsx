import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import React from "react";
import styled, { css } from "styled-components";
import image from "./pxfuel.jpg";

export const renderTheme = ({ children }: any) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const ContainerApp = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #1f1204;
    background-position: center;
    background-size: cover;
    background-image: url(${image});
    


    .header-container {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 0px;
      background-color: #1f1204e3;
    }

    .footer-container {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-bottom: 0px;
      background-color: #1f1204e0;
      color: orange;
      text-shadow: 0 0 5px orange;

      > div {
        > span {
          margin-right: 10px;
        }
      }
    }
  `
);
