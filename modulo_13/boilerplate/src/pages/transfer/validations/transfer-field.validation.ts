import {
  isDateAfterToday,
  isEmailWellFormed,
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
} from "@/common/validation/plane.validation";
import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationFailedResult,
  buildValidationSuccededResult,
  FieldValidationResult,
  INVALID_AMOUNT_MESSAGE,
  INVALID_DATE_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_IBAN_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from "@/common/validation";

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSuccededResult();

export const validateRealDateField = (
  value?: string
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(INVALID_DATE_MESSAGE);
  }

  return buildValidationSuccededResult();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isEmailWellFormed(value)) {
    return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSuccededResult();
};
