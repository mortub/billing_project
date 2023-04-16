import { AppContextType } from "../@types/AppContextType";
import { AppReducerAction } from "../@types/AppReducerActionType";

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
    case "CHANGE_ENTITY_BODY":
      return {
        ...state,
        entityBody: action.entityBody,
      };
    case "CHANGE_ENTITIES":
      return {
        ...state,
        entities: action.entities,
      };
    default:
      return state;
  }
};
