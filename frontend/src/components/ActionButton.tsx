import React, { useContext } from "react";
import { ApiAervice } from "../services/ApiService";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { MapActionToMethod } from "../@types/MapActionToMethod";

export const ActionButton = () => {
  const { state } = useContext(AppContext) as StateAndDispatch;

  const makeApiRequest = async () => {
    ApiAervice.setEntity(state.entity);
    const name = MapActionToMethod[state.action];
    await ApiAervice[name]();
  };

  return (
    <div>
      <button onClick={makeApiRequest}>{state.action}</button>
    </div>
  );
};
