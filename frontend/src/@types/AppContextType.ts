import { Actions } from "./enums/ActionsEnum";
import { Entities } from "./enums/EntitiesEnum";

export type AppContextType = {
  entity: Entities;
  action: Actions;
};
