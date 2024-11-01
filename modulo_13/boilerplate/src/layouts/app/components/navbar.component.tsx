import React from "react";
import { Link, useLocation } from "react-router-dom";

import { appRoutes, routesPrefixes } from "@/core/router";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        {pathname.includes(routesPrefixes.movements) ? (
          <li className={classes.selected}>
            <Link to={routesPrefixes.movements}>Movimientos</Link>
          </li>
        ) : null}
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
