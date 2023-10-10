import styled, { css } from "styled-components";
import radialGold from "./gold-texture-wallpaper.jpg";
import radialSilver from "./silver-2143730_1280.jpg";

export const Container = styled("div")(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1f1204e0;

    .container-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 15px;

      .golden-pass {
        width: 70px;
        height: 70px;
        background-color: #1f1204e0;
        position: absolute;
        z-index: 1000;
        background-image: url(${radialGold});
        background-size: cover;
        background-position: center;
        border: 5px solid #1f1204;
        top: 115px;
        transform: rotate(45deg);

        &::after {
          content: "";
          background: #1f1204e0;
          width: 10px;
          height: 10px;
        }

        &::before {
          content: "";
          background: #1f1204e0;
          width: 10px;
          height: 10px;
        }
      }

      > img {
        position: absolute;
        height: 290px;
      }

      .partial-pass {
        display: flex;
        width: 250px;
        height: 320px;
        border: 1px solid orange;
        margin-bottom: 10px;
        background-image: url(${radialGold});
        background-size: cover;
        background-position: center;
        filter: url("#fireButton");

        &:hover {
          box-shadow: 0 0 1px orange, 0 0 1px orange, 0 0 0px orange,
            0 0 3px orange, 0 0 6px orange;
        }
      }


      .silver-pass {
        width: 70px;
        height: 70px;
        background-color: #1f1204e0;
        position: absolute;
        z-index: 1000;
        background-image: url(${radialSilver});
        background-size: cover;
        background-position: center;
        border: 5px solid #1f1204;
        top: 115px;
        transform: rotate(45deg);

        &::after {
          content: "";
          background: #1f1204e0;
          width: 10px;
          height: 10px;
        }

        &::before {
          content: "";
          background: #1f1204e0;
          width: 10px;
          height: 10px;
        }
      }

      > img {
        position: absolute;
        height: 290px;
      }

      .pass-silver-bg {
        display: flex;
        width: 250px;
        height: 320px;
        border: 1px solid silver;
        margin-bottom: 10px;
        background-image: url(${radialSilver});
        background-size: cover;
        background-position: center;
        filter: url("#fireButton");

        &:hover {
          box-shadow: 0 0 1px silver, 0 0 1px silver, 0 0 0px silver,
            0 0 3px silver, 0 0 6px silver;
        }
      }
    }
  `
);
