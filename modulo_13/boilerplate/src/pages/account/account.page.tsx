import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account.vm";
import classes from "./account.page.module.css";
import { AccountFormComponent } from "./components/account-form.component";
import { saveAccount } from "./api/account.api";

export const AccountPage: React.FC = () => {
  const handleAccount = (account: AccountVm) => {
    saveAccount(account).then((result) => {
      if (result) {
        alert("Cuenta bancaria creada con éxito");
      } else {
        alert("Error al crear la cuenta bancaria");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <AccountFormComponent onAccount={handleAccount} />
      </div>
    </AppLayout>
  );
};
