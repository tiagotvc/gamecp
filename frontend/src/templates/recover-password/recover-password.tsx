import React, { ChangeEvent, useState, useEffect } from "react";
import { Container } from "./styles";
import InputText from "../../components/InputText/inputText";
import { Button } from "react-bootstrap";
import { createUser } from "../../service/user.service";

export const RecoverPasswordPage: React.FC = () => {
  const [state, setState] = useState({
    username: "",
    newpassword: "",
    reenterpassword: "",
  });

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (state.newpassword === state.reenterpassword) {
        try {
           console.log('recover');
        }
        catch (err) {
            console.log(err)
        }
        
    }
    
  }

  return (
    <Container>
      <div className="container-content">
        <div className="gamecp-name">
          <h1>Game control panel</h1>
        </div>
        <form onSubmit={onFormSubmit} >
          <div className="recoverpass username-input" id="username">
            <InputText
              labelText="login"
              id="username"
              onChangeEvent={onInputChange}
              value={state.username}
              required
            />
          </div>
          <div className="recoverpass reenter-password-input" id="newpassword">
            <InputText
              labelText="newpassword"
              id="newpassword"
              onChangeEvent={onInputChange}
              value={state.newpassword}
              required
            />
          </div>
          <div className="recoverpass reenter-password-input" id="reenterpassword">
            <InputText
              labelText="reenter password"
              id="reenterpassword"
              onChangeEvent={onInputChange}
              value={state.reenterpassword}
              required
            />
          </div>
          <div className="recoverpass login-actions" id="submit">
          <Button className="kave-btn"color="danger" variant="outline" type="submit">
              <span className="kave-line"></span>
              Connect
            </Button>
          </div>
          <div className="recoverpass redirect-to-signin">
            <a href="/">Already has a account ? Signin</a>
          </div>
          <div className="recoverpass studio-name">
            <p>{`<> Oak studio`}</p>
          </div>
        </form>
      </div>
    </Container>
  );
};
