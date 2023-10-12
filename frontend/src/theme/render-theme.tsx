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
    width: 100%;
    height: 100vh;
    background-color: rgb(183, 100%, 25%);
    overflow: hidden;

    
    .header-container {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 0px;
    }

    .footer-container {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-bottom: 0px;
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
