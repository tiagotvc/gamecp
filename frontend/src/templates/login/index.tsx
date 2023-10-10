import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from './styles';
import InputText from '../../components/InputText/inputText';
import Button from '../../components/Button/button';

export const LoginPage: React.FC = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
      });
    
      const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.id]: event.target.value });
      };

    const navigate = useNavigate()

    const onSubmit = () => {
        navigate("/signup")
    }

    return (
        <Container>
            <div className='container-content'>
                <div className='gamecp-name'>
                    <h1>Awakening Game Control</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className='login-username-input'>
                        <InputText labelText='login'  onChangeEvent={onInputChange} value={state.username} id="username" required/>
                    </div>
                    <div className='login-password-input'>
                        <InputText labelText='password'  onChangeEvent={onInputChange} value={state.password} id="password" required/>
                    </div>
                    <div className='login-actions'>
                        <Button children="Connect" buttonType='primary'/>
                    </div>
                    <div className='login-forgot-password'>
                        <a href='/forgot-password'>Forgot your password ?</a>
                    </div>
                    <div className='login-forgot-password'>
                        <a href='/signup'>Dont have a account ? Create</a>
                    </div>
                </form>
                <div className='hidde-svg'>
                    <svg>
                        <filter id='fire'>
                            <feTurbulence id='turbulance' baseFrequency='0.1 0.1' numOctaves='2' seed='3'>
                                <animate attributeName='baseFrequency' dur='10s' values='0.1 0.1;0.12 0.12' repeatCount='indefinite'></animate>
                            </feTurbulence>
                            <feDisplacementMap in='SourceGraphic' scale='6'/>
                        </filter>
                    </svg>
                </div>
            </div>
       
        </Container>
    )
}