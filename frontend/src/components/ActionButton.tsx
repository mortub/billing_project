import React, { useContext } from "react";
import { ApiAervice } from "../services/ApiService";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { MapActionToMethod } from "../@types/MapActionToMethod";
import { ReducerActionTypes } from "../@types/enums/ReducerActionsEnum";
import { Actions } from "../@types/enums/ActionsEnum";

export const ActionButton = () => {
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;

  const makeApiRequest = async () => {
    ApiAervice.setEntity(state.entity);
    const name = MapActionToMethod[state.action];
    const result = await ApiAervice[name]();
    if (state.action === Actions.GET_ALL) {
      dispatch({
        type: ReducerActionTypes.CHANGE_ENTITIES,
        entities: result as unknown as any[],
      });
    }
  };

  return (
    <div>
      <button onClick={makeApiRequest}>{state.action}</button>
    </div>
  );
};
