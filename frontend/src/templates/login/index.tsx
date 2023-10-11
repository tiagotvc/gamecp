import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
// import InputText from '../../components/InputText/inputText';
// import Button from '../../components/Button/button';
import {
  CustomControlledPasswordInput,
  CustomControlledTextInput,
} from "../../components/FormInputs/CustomTextInput/CustomTextInput";
import useLoginForm, { LoginHandleSubmitValues } from "./Hooks/useLoginForm";
import "./Styles/Styles.Login.scss";
import { Button } from "react-bootstrap";
import { signin } from "../../service/user.service";
import "../../index.scss"
// import brl from './brazil_flag_wallpaper-1920x1200.webp'
// import englishFlag from  './imageeua.png'
// import espanFlag from './espanha.png'

export const LoginPage: React.FC = () => {
  // const [state, setState] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     setState({ ...state, [event.target.id]: event.target.value });
  //   };

  const navigate = useNavigate();
  //  const [userName, setUserName] = useState<string>('');
  //  const [password, setPassword] = useState<string>('');

  const { methods } = useLoginForm();

  const onSubmit = async (values: LoginHandleSubmitValues) => {
    try {
      await signin({
        username: values.Login,
        password: values.Password,
      }).then(() => {
        navigate("/dashboard")
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="container-content">
        <div className="gamecp-name">
          <h1>Game control panel</h1>
        </div>
        <form className="grid-login" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="login">
            <CustomControlledTextInput
              autoComplete="off"
              label="Login"
              control={methods.control}
              name="Login"
            />
          </div>
          <div className="password">
            <CustomControlledPasswordInput
              maxLength={12}
              autoComplete="off"
              label="Password"
              control={methods.control}
              name="Password"
            />
          </div>
          <div className="login-actions">
            <Button className="kave-btn"color="danger" variant="outline" type="submit">
              <span className="kave-line">Connect</span>
         </Button>
          </div>
          <div className="login-forgot-password">
            <a href="/recoverpass">Forgot your password ?</a>
          </div>
          <div className="login-forgot-password">
            <a href="/signup">Dont have a account ? Create</a>
          </div>
          <div className="login-forgot-password">
            <p>{`<> Oak studio`}</p>
          </div>
        </form>
      </div>
    </Container>
  );
};
