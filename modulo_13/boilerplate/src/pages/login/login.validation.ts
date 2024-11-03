import { CredentialsFormErrors, Credentials } from "./login.vm";
import { FormValidationResult } from "@/common/validation";
import {
  validatePasswordField,
  validateUserField,
} from "./login-field.validation";

export const validateForm = (
  credentials: Credentials
): FormValidationResult<CredentialsFormErrors> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
