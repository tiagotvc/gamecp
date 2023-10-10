export declare type IErrorResponse = {
  code: string;
  message: string;
  status: number;
  field: string;
};
export declare class FormError extends Error {
  readonly error: IErrorResponse;
  constructor(error: IErrorResponse);
  getErrorResponse(): {
    errors: IErrorResponse[];
  };
}
