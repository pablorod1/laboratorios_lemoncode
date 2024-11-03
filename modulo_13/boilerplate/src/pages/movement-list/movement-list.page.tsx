import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components";
import classes from "./movement-list.page.module.css";
import { AccountDetails, getAccountDetails, getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const accountId = location.pathname.split("/")[2];

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountDetails, setAccountDetails] = React.useState<AccountDetails>({
    name: "",
    iban: "",
  });

  React.useEffect(() => {
    getMovements(accountId).then((result) => {
      setMovementList(mapMovementListFromApiToVm(result));
    });

    getAccountDetails(accountId).then((result) => setAccountDetails(result));
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.balanceContainer}>
            <span>SALDO DISPONIBLE</span>
            <span className={classes.balanceAmount}>1490 €</span>
          </div>
        </div>
        <div className={classes.tableHeaderContainer}>
          <span>Alias: {accountDetails.name}</span>
          <span>IBAN: {accountDetails.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
