import React, { useContext } from 'react';
import { Actions } from '../@types/enums/ActionsEnums';
import { AppContext } from '../context/AppContext';
import { StateAndDispatch } from '../@types/StateAndDispatchType';
import { ReducerActionTypes } from '../@types/enums/ReducerActionsEnum';


export const ActionToggle = () =>{
  const { dispatch } = useContext(AppContext) as StateAndDispatch;

  const onChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const action = event.target.value as Actions
    dispatch({ type: ReducerActionTypes.CHANGE_ACTION, action });
  }

  return (
    <div>
    <div>
      <label>Choose Action:  </label>
      <select onChange={onChangeAction}>
        {Object.values(Actions).map((action: string, ) => (
          <option value={action}>{action}</option>
        ))}
      </select>
    </div>
  </div>
  );
}