import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { ApiAervice } from "../services/ApiService";
import { ReducerActionTypes } from "../@types/enums/ReducerActionsEnum";

export const EntitySelectList = () => {
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;
  const [entities, setEntities] = useState([] as any[]);

  const shouldFetch = () => {
    return state.action === Actions.UPDATE || state.action === Actions.DELETE;
  };

  useEffect(() => {
    const fetchItems = async () => {
      ApiAervice.setEntity(state.entity);
      const entities = (await ApiAervice.getAll()) as any[];
      setEntities(entities);
      ApiAervice.setEntityId(entities[0].id);
      ApiAervice.setBody(entities[0]);
      dispatch({
        type: ReducerActionTypes.CHANGE_ENTITY_BODY,
        entityBody: entities[0],
      });
    };

    if (shouldFetch()) fetchItems();
  }, [state.action, state.entity]);

  const itemToString = (item: Record<string, any>) => {
    let string = "";
    for (const [key, value] of Object.entries(item)) {
      const title = key[0].toUpperCase() + key.slice(1).replace("_", " ");
      string += `${title}: ${value}, `;
    }
    return string.slice(0, string.length - 2);
  };

  const entityPicked = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const itemId = parseInt(event.target.value);
    const found = entities.find((e) => e.id === itemId);
    ApiAervice.setEntityId(itemId);
    ApiAervice.setBody(found);
    dispatch({
      type: ReducerActionTypes.CHANGE_ENTITY_BODY,
      entityBody: found,
    });
  };

  const renderEntities = () => {
    return entities?.map((item) => (
      <option key={item.id} value={item.id}>
        {itemToString(item)}
      </option>
    ));
  };

  return (
    <div>
      {(state.action === Actions.DELETE || state.action === Actions.UPDATE) && (
        <>
          <h1>
            Select From {state.entity} an Item to {state.action}
          </h1>
          <select onChange={entityPicked}>{renderEntities()}</select>
        </>
      )}
    </div>
  );
};
