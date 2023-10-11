/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { ShowSnackbarFunction } from "../../components/Snackbar/snackbar.utils";


export interface IActionsContext {
  showSnackbar: ShowSnackbarFunction;
}

export const ActionsContext = createContext<IActionsContext>({
  showSnackbar: () => {},
});