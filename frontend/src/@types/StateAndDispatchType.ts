import { AppContextType } from "./AppContextType";
import { AppReducerAction } from "./AppReducerActionType";

export type StateAndDispatch = {
  state: AppContextType;
  dispatch: React.Dispatch<AppReducerAction>;
};
