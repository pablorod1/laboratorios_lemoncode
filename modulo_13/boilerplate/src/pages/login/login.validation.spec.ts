import { REQUIRED_FIELD_MESSAGE } from "@/common/validation";
import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation", () => {
  it("should return validation succeeded when both fields are filled", () => {
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    const result = validateForm(credentials);

    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });

  it("should return validation failed when user is empty", () => {
    const credentials: Credentials = {
      user: "",
      password: "mypassword",
    };

    const result = validateForm(credentials);

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual("");
  });

  it("should return validation failed when password is empty", () => {
    const credentials: Credentials = {
      user: "myuser",
      password: "",
    };

    const result = validateForm(credentials);

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });

  it("should return validation failed when both fields are empty", () => {
    const credentials: Credentials = {
      user: "",
      password: "",
    };

    const result = validateForm(credentials);

    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });
});
