import React, { useState } from "react";
import { ShowSnackbarFunction, SnackBarTypes } from "./snackbar.utils";

export function useSnackbar() {
  const [currentMessage, setMessage] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [autoHide, setAutoHide] = useState<boolean>(false);
  const [type, setType] = useState<SnackBarTypes>("sucess");

  const showSnackbar: ShowSnackbarFunction = ({ message, type, autohide }) => {
    console.log("ta aquiiii")
    setMessage(message);
    setIsActive(true);
    setType(type);      
    setAutoHide(autohide);
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