type ErrorName = "FIELD_ERROR" | "NOT_FOUND_ERROR";
type ErrorObject = {
  name: ErrorName;
  message: string;
  field?: string;
  status?: number;
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
      status: 400,
    },
  });
};

export const NotFoundError = (message: string) => {
  throw new GameCpError({
    error: {
      message,
      name: "NOT_FOUND_ERROR",
      status: 400,
    },
  });
};
