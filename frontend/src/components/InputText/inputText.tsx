import React, { ChangeEvent }  from 'react';
import { Container } from './styles'

interface InputTextProps {
    labelText: string;
    value: string | number;
    onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => any;
    id: string;
    required: boolean;
}

export const InputText : React.FC<InputTextProps> = ({ labelText, onChangeEvent, value, id, required }) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeEvent(event)
    }
   
    return (
        <Container>
            <input onChange={onInputChange} value={value} id={id} required={required}></input>
            <span>{labelText}</span>
        </Container>
       
    )
}

export default InputText;