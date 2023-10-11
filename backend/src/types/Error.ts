type ErrorName = "FIELD_ERROR";
type ErrorObject = {
  name: ErrorName;
  message: string;
  field: string;
};

export class GameCpError extends Error {
  error: ErrorObject;

  constructor({ error }: { error: ErrorObject }) {
    super();
    this.error = error;
  }
}

export const FieldError = (field: string, message: string) => {
  throw new GameCpError({
    error: {
      message,
      field,
      name: "FIELD_ERROR",
    },
  });
};
