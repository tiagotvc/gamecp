import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from './styles';
import InputText from '../../components/InputText/inputText';
import Button from '../../components/Button/button';
import brl from './brazil_flag_wallpaper-1920x1200.webp'
import englishFlag from  './imageeua.png'
import espanFlag from './espanha.png'

export const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = () => {
        navigate('/battlePass')
    }

    return (
        <Container>
            <div className='container-content'>
                <div className='gamecp-name'>
                    <h1>Awakening Game Control</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className='login-username-input'>
                        <InputText labelText='login'/>
                    </div>
                    <div className='login-password-input'>
                        <InputText labelText='password'/>
                    </div>
                    <div className='login-actions'>
                        <Button children="Connect" buttonType='primary'/>
                    </div>
                    <div className='login-forgot-password'>
                        <a href='/forgot-password'>Forgot your password ?</a>
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