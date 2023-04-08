import { AppContextType } from "../@types/AppContextType";
import { AppReducerAction } from "../@types/AppResucerActionType";

export const AppReducer = (state: AppContextType, action: AppReducerAction) => {
  switch (action.type) {
    case "CHANGE_ENTITY":
      console.log("change entity");
      return {
        ...state,
        entity: action.entity,
      };
    case "CHANGE_ACTION":
      console.log("change action");
      return {
        ...state,
        action: action.action,
      };
    default:
      return state;
  }
};
