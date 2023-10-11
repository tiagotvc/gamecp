import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './templates/login';
import { ContainerApp } from './theme/render-theme';
import { SignupPage } from './templates/signup/signup';
import { RecoverPasswordPage } from './templates/recover-password/recover-password';
import { LayoutPage } from './templates/layout/layout';
import { Layout } from './components/Layout/layout';


const Main = () => {
return ( 
  <ContainerApp>
    <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/recoverpass' element={<RecoverPasswordPage/>} />
        <Route path='/dashboard' element={<LayoutPage/>} />
    </Routes>
  </ContainerApp>        
    
);
}
export default Main;