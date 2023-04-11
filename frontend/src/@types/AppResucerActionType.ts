import { Actions } from "./enums/ActionsEnum";
import { Entities } from "./enums/EntitiesEnum";
import { ReducerActionTypes } from "./enums/ReducerActionsEnum";

export type AppReducerAction =
  | { type: ReducerActionTypes.CHANGE_ACTION; action: Actions }
  | { type: ReducerActionTypes.CHANGE_ENTITY; entity: Entities };
