import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { CustomersList } from "./CustomersList";
import { TransactionsList } from "./TransactionsList";
import { Entities } from "../@types/enums/EntitiesEnum";

export const EntityList = () => {
  const { state } = useContext(AppContext) as StateAndDispatch;

  return (
    <div>
      {state.action === Actions.GET_ALL && (
        <>
          <h1>{state.entity} Table</h1>
          <table>
            {state.entity === Entities.CUSTOMERS ? (
              <CustomersList customers={state.entities} />
            ) : (
              <TransactionsList transactions={state.entities} />
            )}
          </table>
        </>
      )}
    </div>
  );
};
