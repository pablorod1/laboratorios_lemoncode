import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSuccededResult,
  FieldValidationResult,
  isStringValueInformed,
} from "@/common/validation";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSuccededResult();
};

export const validatePasswordField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSuccededResult();
};
