import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import {
  CustomControlledPasswordInput,
  CustomControlledTextInput,
} from "../../components/FormInputs/CustomTextInput/CustomTextInput";
import useLoginForm, { LoginHandleSubmitValues } from "./Hooks/useLoginForm";
import "./Styles/Styles.Login.scss";
import { Button } from "react-bootstrap";
import { signin } from "../../service/user.service";
import "../../index.scss";
import { ActionsContext } from "../../contexts/Navbar/Navbar.context";

export const LoginPage: React.FC = () => {
  const { showSnackbar } = useContext(ActionsContext);

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
      const token = await signin({ username: values.Username, password: values.Password });
      if (token) {
        showSnackbar({
          message: "Login sucess!",
          type: "sucess",
          autohide: true,
          afterLoadCallback: () => navigate('/dashboard/accountinfo'),
        });
        localStorage.setItem("token",JSON.stringify(token?.data?.token))
      }
    } catch (err: any) {
      showSnackbar({
        message: err?.response?.data?.error?.message as string,
        type: "error",
        autohide: true,
      });
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
              name="Username"
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
            <Button
              className="kave-btn"
              color="danger"
              variant="outline"
              type="submit"
            >
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
