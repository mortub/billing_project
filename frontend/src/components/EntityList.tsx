import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { CustomersList } from "./CustomersList";
import { TransactionsList } from "./TransactionsList";
import { Entities } from "../@types/enums/EntitiesEnum";
import { ReducerActionTypes } from "../@types/enums/ReducerActionsEnum";

export const EntityList = () => {
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;

  useEffect(() => {
    dispatch({
      type: ReducerActionTypes.CHANGE_ENTITIES,
      entities: [],
    });
  }, [state.entity]);

  const showTable = () => (
    <>
      {state.entity === Entities.CUSTOMERS ? (
        <CustomersList customers={state.entities} />
      ) : (
        <TransactionsList transactions={state.entities} />
      )}
    </>
  );

  return (
    <div>
      {state.action === Actions.GET_ALL && (
        <>
          <h2>{state.entity} Table</h2>
          {state.entities.length === 0 ? (
            <label>No {state.entity}</label>
          ) : (
            <table>{showTable()}</table>
          )}
        </>
      )}
    </div>
  );
};
