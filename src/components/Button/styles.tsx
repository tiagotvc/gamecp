import styled, { css } from 'styled-components'
import goldTexture from "./gold-texture-wallpaper.jpg"
import silverTexture from "./silver-2143730_1280.jpg"


interface BtnProps {
    buttonType: string;
   }

export const Btn = styled("button")<BtnProps>(
    ({ buttonType, theme }) => css`
       color: ${theme.btn[buttonType].fontColor};
       background-color: ${theme.btn[buttonType].bgColor};
       width: 150px;
       height: 40px;
       border: 2px solid ${theme.btn[buttonType].borderColor};
       cursor: pointer;
       border-radius: 15px;
       font-weight: 600;
       box-shadow: 0 0 5px ${theme.btn[buttonType].borderColor};
       font-size: 16px;
      
       &:hover {
        border: 2px solid ${theme.btn[buttonType].hoverBorderColor};
        color:${theme.btn[buttonType].hoverBorderColor};
       }

    `
);

export const GoldenButton = styled("button")(
    ({ theme }) => css`
    width: 250px;
    height: 50px;
    color: #1f1204e0;
    font-weight: bold;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 1.1em;
    cursor: pointer;
    filter:url('#fireButton');
    background-image: url(${goldTexture});
    background-size: cover;
    border: none;
    box-shadow: 0 0 1px orange, 0 0 2px orange, 0 0 4px orange,
            0 0 6px orange, 0 0 12px orange;
    `
)

export const SilverButton = styled("button")(
    ({ theme }) => css`
    width: 250px;
    height: 50px;
    color: #1f1204e0;
    font-weight: bold;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 1.1em;
    cursor: pointer;
    filter:url('#fireButton');
    background-image: url(${silverTexture});
    background-size: cover;
    border: none;
    box-shadow: 0 0 1px silver, 0 0 2px silver, 0 0 4px silver,
            0 0 6px silver, 0 0 12px silver;
    `
)

export const Text = styled("span")(
    ({ theme }) => css`
    color: #1f1204e0;
    font-weight: bold;
    font-size: 1.1em;
    position: absolute;
    margin-top: 330px;
    `
)