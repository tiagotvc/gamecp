import React  from 'react';
import { Btn, GoldenButton, SilverButton, Text } from './styles'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
 children: React.ReactNode;
 buttonType: string;
}

export const Button: React.FC<ButtonProps> = ({ children, buttonType }, props) => {
    return (
        <>
        {buttonType !== "golden" && buttonType !== "silver" && (<Btn { ...props} buttonType={buttonType}>{children}</Btn>)}
        {buttonType === "golden" && <><GoldenButton { ...props} ></GoldenButton>
        <Text>{children}</Text></>}
        {buttonType === "silver" && <><SilverButton { ...props} ></SilverButton>
        <Text>{children}</Text></>}
        </>
        
    )
}

export default Button;