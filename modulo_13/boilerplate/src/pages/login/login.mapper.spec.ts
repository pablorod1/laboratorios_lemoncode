import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credential with same properties", () => {
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    const result: apiModel.Credentials =
      mapCredentialsFromVmToApi(vmCredentials);

    expect(result).toEqual(expectedApiCredentials);
  });
});
