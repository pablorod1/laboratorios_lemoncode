import {
  buildValidationFailedResult,
  buildValidationSuccededResult,
  FieldValidationResult,
  isStringValueInformed,
  REQUIRED_FIELD_MESSAGE,
} from "@/common/validation";

export const validateTypeField = (value: string): FieldValidationResult => {
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
