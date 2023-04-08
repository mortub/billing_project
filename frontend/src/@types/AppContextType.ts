import { Actions } from "./enums/ActionsEnums";
import { Entities } from "./enums/EntitiesEnum";

export type AppContextType = {
  entity: Entities;
  action: Actions;
};
