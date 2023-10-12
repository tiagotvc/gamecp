import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./templates/login";
import { ContainerApp } from "./theme/render-theme";
import { SignupPage } from "./templates/signup/signup";
import { RecoverPasswordPage } from "./templates/recover-password/recover-password";
import { LayoutPage } from "./templates/layout/layout";
import { ActionsContext } from "./contexts/Navbar/Navbar.context";
import { useSnackbar } from "./components/Snackbar/useSnackbar";
import { Snackbar } from "./components/Snackbar/snackbar";
import { AccountInformation } from "./templates/accountInformation/accountInformation";

const Main = () => {
  const {
    showSnackbar,
    isActive,
    message,
    snackbarType,
    autoHide,
    hideSnackbar,
  } = useSnackbar();
  return (
    <ContainerApp>
      <ActionsContext.Provider value={{ showSnackbar }}>
        <Snackbar
          message={message as string}
          active={isActive}
          type={snackbarType}
          autoHide={autoHide}
          snackbarCallback={hideSnackbar}
        />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/recoverpass" element={<RecoverPasswordPage />} />
          <Route path="/dashboard/*" element={<LayoutPage />} />
        </Routes>
      </ActionsContext.Provider>
    </ContainerApp>
  );
};
export default Main;
