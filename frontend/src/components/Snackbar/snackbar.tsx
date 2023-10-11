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
}) => {
  useEffect(() => {
    if (!autoHide) return;
    setTimeout(() => {
      snackbarCallback();
    }, 90000);
  }, [autoHide]);

  const name = type === "sucess" ? "Sucess" : "Alert";
  return (
    <>
      {active && (
        <Container type={type}>
          <Icon iconName={name} />
          {message}
          <div onClick={snackbarCallback}>
            <Icon iconName="Close"/>
          </div>
        </Container>
      )}
    </>
  );
};