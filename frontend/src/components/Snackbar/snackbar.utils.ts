export type SnackBarTypes = "sucess" | "error" | "info";

export interface SnackbarProps {
  message: string;
  active: boolean;
  type: SnackBarTypes;
  autoHide: boolean;
  snackbarCallback: () => void;
  afterLoadCallback?: () => void;
}

export interface SnackbarConfig {
  message: string;
  type: SnackBarTypes;
  autohide: boolean;
  afterLoadCallback?: () => void;
}

export interface SnackbarStyleProps {
  type: SnackBarTypes;
}

export type ShowSnackbarFunction = (config: SnackbarConfig) => void;
