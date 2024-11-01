import {
  createEmptyCredentialsFormErrors,
  CredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}

export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };

  if (!credentials.user.trim()) {
    validationResult.succeeded = false;
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe introducir un usuario",
    };
  }

  if (!credentials.password.trim()) {
    validationResult.succeeded = false;
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe introducir una contraseña",
    };
  }

  return validationResult;
};
