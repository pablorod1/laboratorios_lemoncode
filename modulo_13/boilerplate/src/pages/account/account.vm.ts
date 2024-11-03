export interface AccountVm {
  type: string;
  name: string;
}

export const AccountTypes: string[] = [
  "Cuenta Corriente",
  "Cuenta de Ahorro",
  "Cuenta de Nómina",
];

export const createEmptyAccountVm = (): AccountVm => ({
  type: "",
  name: "",
});

export interface AccountError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): AccountError => ({
  type: "",
  name: "",
});
