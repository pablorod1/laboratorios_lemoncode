import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFromVmToApi = (
  crendentials: viewModel.Credentials
): apiModel.Credentials => {
  return {
    user: crendentials.user,
    password: crendentials.password,
  };
};
