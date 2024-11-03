import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  React.useEffect(() => {
    if (defaultAccountId) {
      setTransfer((prevTransfer) => ({
        ...prevTransfer,
        accountId: defaultAccountId,
      }));
    }
  });

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainerGroup}>
          <div className={classes.formContainer}>
            <label>Seleccione una cuenta origen:</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>{" "}
          <div className={classes.formContainer}>
            <label>Ingrese el IBAN de destino:</label>
            <input
              className={classes.large}
              type="text"
              name="iban"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div className={classes.formContainer}>
            <label>Beneficiario:</label>
            <input
              className={classes.large}
              type="text"
              name="name"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div className={classes.formContainer}>
            <label>
              Importe <span>(EUR)</span>:
            </label>
            <input
              className={classes.small}
              name="amount"
              type="number"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div className={classes.formContainer}>
            <label>Concepto:</label>
            <input
              className={classes.large}
              type="text"
              name="concept"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>{" "}
          <div className={classes.formContainer}>
            <label>Observaciones:</label>
            <input
              className={classes.large}
              type="text"
              name="notes"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={`${classes.formContainer} ${classes.borderBottom}`}>
          {" "}
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label>Fecha de ejecución:</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div className={`${classes.formContainer} ${classes.borderBottom}`}>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input
              className={classes.large}
              type="email"
              name="email"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          REALIZAR LA TRANSFERENCIA
        </button>
      </form>
    </div>
  );
};
