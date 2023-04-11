import { AppContextType } from "../@types/AppContextType";
import { AppReducerAction } from "../@types/AppResucerActionType";

export const AppReducer = (state: AppContextType, action: AppReducerAction) => {
  switch (action.type) {
    case "CHANGE_ENTITY":
      return {
        ...state,
        entity: action.entity,
      };
    case "CHANGE_ACTION":
      return {
        ...state,
        action: action.action,
      };
    default:
      return state;
  }
};
