import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>Fecha</span>
            <span className={classes.headerCell}>Fecha Valor</span>
            <span className={classes.headerCell}>Descripción</span>
            <span className={classes.headerCell}>Importe</span>
            <span className={classes.headerCell}>Saldo Disponible</span>
          </div>
          {movementList.map((movement) => (
            <MovementListItemComponent
              key={movement.id}
              movementItem={movement}
            />
          ))}
        </div>
      </div>
    </>
  );
};
