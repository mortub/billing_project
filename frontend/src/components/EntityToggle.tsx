import React, {useContext, useState} from 'react';
import { Entities } from '../@types/enums/EntitiesEnum';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../@types/AppContextType';
import { ReducerActionTypes } from '../@types/enums/ReducerActionsEnum';
import { StateAndDispatch } from '../@types/StateAndDispatchType';

export const EntityToggle = () =>{
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;

  const onChangeEntity= (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const entity = event.target.value as Entities
    dispatch({ type: ReducerActionTypes.CHANGE_ENTITY, entity  });
  }

  return (
    <div >
    <div>
      <text>Entity: {state.entity} </text>
      <text>Action: {state.action} </text>

      <label>Choose Entity:  </label>
      <select onChange={onChangeEntity}>
        {Object.values(Entities).map((entity: string, ) => (
          <option value={entity} >{entity}</option>
        ))}
      </select>
    </div>
  </div>
  );
}
