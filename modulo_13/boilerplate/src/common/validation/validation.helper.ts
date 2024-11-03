import { REQUIRED_FIELD_MESSAGE } from "./validation.const";

export const buildValidationFailedResult = (errorMessage: string) => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSuccededResult = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
