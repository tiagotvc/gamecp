import styled, { css } from 'styled-components'

export const Container = styled("div")(
    ( { theme }) => css`
        position: relative;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > input {  
            width: 100%;
            padding: 10px;
            border: none;
            background: #1f1204d7;
            border-radius: 5px;
            outline: none;
            color: #ffa60088;
            font-size: 1em;
            font-weight: 600;
            height: 25px;
        }

        > span {
            position: absolute;
            left: 0;
            padding: 10px;
            pointer-events: none;
            font-size: 1em;
            color: #ffa60088;
            text-transform: uppercase;
            text-align: center;
        }

        > input:valid ~ span, input:focus ~ span {
            color: #ffa60088;
            transform: translateX(1px) translateY(-24px);
            font-size: 0.70em;
            padding: 1px 10px;
            border-radius: 2px;
        }
        
        > input:valid, > input:focus {
            box-shadow: 0 0 3px orange;
        }
        

    `
)