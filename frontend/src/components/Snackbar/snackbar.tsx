import React, { useEffect } from "react";
import { Container } from "./styles";
import { SnackbarProps } from "./snackbar.utils";
import { Icon } from "../Icon/Icon";

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  active,
  type,
  autoHide,
  snackbarCallback,
  afterLoadCallback,
}) => {
  useEffect(() => {
    if (!autoHide) return;
    setTimeout(() => {
      snackbarCallback();
    }, 3000);
  }, [autoHide]);

  useEffect(() => {
    console.log("o status mudou para", active)
  }, [active])

  const name = type === "sucess" ? "Sucess" : "Alert";
  return (
    <>
      {active && (
        <Container type={type}>
           <div className="close" onClick={snackbarCallback}>
          </div>
          {/* <Icon iconName={name} /> */}
          {message}
        </Container>
      )}
    </>
  );
};