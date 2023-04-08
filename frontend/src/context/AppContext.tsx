import * as React from "react";
import { Entities } from "../@types/enums/EntitiesEnum";
import { Actions } from "../@types/enums/ActionsEnums";
import { useReducer } from "react";
import { AppReducer } from "../reducers/AppReducer";
import { StateAndDispatch } from "../@types/StateAndDispatchType";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  entity: Entities.CUSTOMERS,
  action: Actions.CREATE
}

export const AppContext = React.createContext<StateAndDispatch | null>(null);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
