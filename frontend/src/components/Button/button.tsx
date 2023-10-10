import React  from 'react';
import { Btn, GoldenButton, SilverButton, Text } from './styles'

interface ButtonProps {
 children: React.ReactNode;
 buttonType: string;
}

export const Button = ({ children, buttonType }: ButtonProps) => {
    return (
        <>
        {buttonType !== "golden" && buttonType !== "silver" &&(<Btn data-testid="button-component" buttonType={buttonType}>{children}</Btn>)}
        {buttonType === "golden" && <><GoldenButton></GoldenButton>
        <Text>{children}</Text></>}
        {buttonType === "silver" && <><SilverButton></SilverButton>
        <Text>{children}</Text></>}
        </>
        
    )
}

export default Button;