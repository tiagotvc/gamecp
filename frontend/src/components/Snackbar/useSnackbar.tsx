import React, { useState } from "react";
import { ShowSnackbarFunction, SnackBarTypes } from "./snackbar.utils";

export function useSnackbar() {
  const [currentMessage, setMessage] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [autoHide, setAutoHide] = useState<boolean>(false);
  const [type, setType] = useState<SnackBarTypes>("sucess");

  const showSnackbar: ShowSnackbarFunction = ({ message, type, autohide, afterLoadCallback }) => {
    setMessage(message);
    setIsActive(true);
    setType(type);      
    setAutoHide(autohide);
    if (afterLoadCallback) {
      setTimeout(() => {
        afterLoadCallback()
      }, 3000)
      
    }
  };

  const hideSnackbar = () => {
    setIsActive(false);
    setAutoHide(false);
  };

  return {
    showSnackbar,
    message: currentMessage,
    isActive,
    hideSnackbar,
    snackbarType: type,
    autoHide,
  };
}