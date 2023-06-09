import React, { useContext } from "react";
import { Actions } from "../@types/enums/ActionsEnum";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { ReducerActionTypes } from "../@types/enums/ReducerActionsEnum";

export const ActionToggle = () => {
  const { dispatch } = useContext(AppContext) as StateAndDispatch;

  const onChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const action = event.target.value as Actions;
    dispatch({ type: ReducerActionTypes.CHANGE_ACTION, action });
  };

  return (
    <div>
      <label>Choose Action: </label>
      <select onChange={onChangeAction}>
        {Object.values(Actions).map((action: string) => (
          <option className="default-font" value={action}>
            {action}
          </option>
        ))}
      </select>
    </div>
  );
};
