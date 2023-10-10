import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './templates/login';
import { Footer } from './components/Footer/footer';
import { ContainerApp } from './theme/render-theme';
import { Header } from './components/Header/header';
// import image2 from './theme/novo.png'
import { BattlePass } from './templates/battlepass/battlepass';
import { SignupPage } from './templates/signup/signup';


const Main = () => {
return ( 
  <ContainerApp>
    <div className='header-container'>
      <Header/>
    </div>
    <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/battlePass' element={<BattlePass/>} />
    </Routes>
    <div className='footer-container'>
      <Footer/>
    </div>
  </ContainerApp>        
    
);
}
export default Main;