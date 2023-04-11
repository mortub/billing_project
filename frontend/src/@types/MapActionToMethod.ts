import { Actions } from "./enums/ActionsEnum";

export type MapActionToMethodType = {
  [Actions.CREATE]: "create";
  [Actions.UPDATE]: "update";
  [Actions.GET_ALL]: "getAll";
  [Actions.DELETE]: "delete";
};

export const MapActionToMethod: MapActionToMethodType = {
  [Actions.CREATE]: "create",
  [Actions.UPDATE]: "update",
  [Actions.GET_ALL]: "getAll",
  [Actions.DELETE]: "delete",
};
