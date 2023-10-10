import React  from 'react';
import { Container } from './styles';


export const BattlepassCard = () => {
    return (
      <Container>
        <div className='box'>
          <div className='outer'>
              <svg width='600px' height='400px' id="dox-svg">
                <polyline points="10,50 50,10 550,10 590,50 590,300 550,350 340,350 290,390 50,390 10,340 10,50 50,10" stroke="orange" strokeWidth="3px" fill="none" />
                <polyline points="20,60 60,20 540,20 580,60" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="580,290 540,340 330,340 280,380 60,380 20,230" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="540,390 310,390" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="525,360 545,360 530,380 510,380 525,360 545,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="490,360 510,360 495,380 475,380 490,360 510,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="455,360 475,360 460,380 440,380 455,360 475,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="420,360 440,360 425,380 405,380 420,360 440,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="385,360 405,360 390,380 370,380 385,360 405,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
                <polyline points="350,360 370,360 355,380 335,380 350,360 370,360" stroke="#00FFFF" strokeWidth="2px" fill="none"/>
              </svg>
          </div>
        </div>
      </Container>
        
    )
}

export default BattlepassCard;