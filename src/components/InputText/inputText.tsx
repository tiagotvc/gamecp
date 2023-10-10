import React , { useState, ChangeEvent } from 'react';
import { Container } from './styles'
import { trueMock } from '../../utils/constants';

interface InputTextProps {
    labelText: string;
}

export const InputText = ({ labelText }:InputTextProps) => {
    const [textvalue, setTextValue] = useState<string>("");

    const changeTextValue = (event:ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    }

    return (
        <Container>
            <input type="text" onChange={changeTextValue} value={textvalue} required={trueMock}/>
            <span>{labelText}</span>
        </Container>
       
    )
}

export default InputText;