import { FormValidationResult } from "@/common/validation";
import { AccountError, AccountVm } from "../account.vm";
import {
  validateNameField,
  validateTypeField,
} from "./account-field.validation";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateNameField(account.name),
  ];

  const formValidationResult: FormValidationResult<AccountError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
