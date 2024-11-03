import React from "react";
import {
  AccountTypes,
  AccountVm,
  createEmptyAccountError,
  createEmptyAccountVm,
} from "../account.vm";
import { validateForm } from "../validation/account-form.validation";
import classes from "./account-form.component.module.css";

interface Props {
  onAccount: (account: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
  const { onAccount } = props;
  const [account, setAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );
  const [errors, setErrors] = React.useState<AccountVm>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onAccount(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formContainerGroup}>
        <div className={classes.formContainer}>
          <label htmlFor="type">Tipo de cuenta:</label>
          <select name="type" id="type" onChange={handleFieldChange}>
            <option value="">Seleccionar</option>
            {AccountTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p className={classes.error}>{errors.type}</p>
        </div>
        <div className={classes.formContainer}>
          <label htmlFor="name">Alias:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.name}</p>
        </div>
      </div>
      <button className={classes.button} type="submit">
        GUARDAR
      </button>
    </form>
  );
};
