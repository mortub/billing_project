import { AppContextType } from "./AppContextType";
import { AppReducerAction } from "./AppResucerActionType";

export type StateAndDispatch = {
  state: AppContextType;
  dispatch: React.Dispatch<AppReducerAction>;
};
