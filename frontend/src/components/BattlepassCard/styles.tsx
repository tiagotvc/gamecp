import styled, { css } from 'styled-components'
// import goldTexture from "./gold-texture-wallpaper.jpg"
// import silverTexture from "./silver-2143730_1280.jpg"


// interface BtnProps {
//     buttonType: string;
//    }

export const Container = styled("div")(
    ({ theme }) => css`
      width: 250px;
      display: flex;
      flex-direction: column;
      height: 400px;
      align-items: center;

     .box {
      height: 400px;
      width: 600px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
     }

     .outer {
      height: 100%;
      width: 100%;
      top:0;
      background: transparent;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
     }

     .span {
      color: white
     }

     > svg {
      box-shadow: -5px -5px 5px #888;
-webkit-box-shadow: -5px -5px 5px #888;
      > polyline {
        box-shadow: orange 0 0 5px;
      }
     }

    `
);
