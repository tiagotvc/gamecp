import Button from "../../components/Button/button"
import { Container } from "./styles"
import acretia from './pngwing.com.png'
import BattlepassCard from "../../components/BattlepassCard/battlepassCard"

export const BattlePass = () => {

    return (
        <Container>
            <BattlepassCard/>
            {/* <div className="container-card">
                <div className="golden-pass"></div>
                <div className="partial-pass">  
                
                </div>
                <Button children="Buy Golden Pass" buttonType="golden"/>
                <img src={acretia} alt="acretia"/>
            </div>
            <div className="container-card">
                <div className="silver-pass"></div>
                <div className="pass-silver-bg ">  
                
                </div>
                <Button children="Buy Silver Pass" buttonType="silver"/>
                <img src={acretia} alt="acretia"/>
            </div> */}
            
        </Container>
    )
}