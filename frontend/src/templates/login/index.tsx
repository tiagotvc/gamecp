import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from './styles';
// import InputText from '../../components/InputText/inputText';
// import Button from '../../components/Button/button';
import { CustomControlledPasswordInput, CustomControlledTextInput } from '../../components/FormInputs/CustomTextInput/CustomTextInput';
import useLoginForm, { LoginHandleSubmitValues } from './Hooks/useLoginForm';
import "./Styles/Styles.Login.scss"
import { Button } from 'react-bootstrap';
// import brl from './brazil_flag_wallpaper-1920x1200.webp'
// import englishFlag from  './imageeua.png'
// import espanFlag from './espanha.png'

export const LoginPage: React.FC = () => {
    const navigate = useNavigate()
   //  const [userName, setUserName] = useState<string>('');
   //  const [password, setPassword] = useState<string>('');

   const { methods } = useLoginForm()

    const onSubmit = (values: LoginHandleSubmitValues) => {
        navigate('/battlePass')
    }

    return (
        <Container>
            <div className='container-content'>
                <div className='gamecp-name'>
                    <h1>Awakening Game Control</h1>
                </div>
                <form className='grid-login' onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className='login'>
                        <CustomControlledTextInput autoComplete='off' label='Login' control={methods.control} name='Login' />
                    </div>
                    <div className='password'>
                        <CustomControlledPasswordInput maxLength={12} autoComplete='off' label='Password' control={methods.control} name='Password' />
                    </div>
                    <div className='login-actions'>
                        <Button color='danger' variant='outline' type='submit'>Connect</Button>
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