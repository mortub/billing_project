import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { ApiAervice } from "../services/ApiService";

export const EntitySelectList = () => {
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;
  const [entities, setEntities] = useState([] as any[]);

  useEffect(() => {
    const fetchItems = async () => {
      ApiAervice.setEntity(state.entity);
      const entities = (await ApiAervice.getAll()) as any[];
      setEntities(entities);
    };
    fetchItems();
  }, [state.entity]);

  const itemToString = (item: Record<string, any>) => {
    let string = "";
    for (const [key, value] of Object.entries(item)) {
      const title = key[0].toUpperCase() + key.slice(1).replace("_", " ");
      string += `${title}: ${value}, `;
    }
    return string.slice(0, string.length - 2);
  };

  const customerPicked = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const itemId = event.target.value as unknown as number;
    ApiAervice.setEntityId(itemId);
  };

  const renderEntities = () => {
    return entities.map((item) => (
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
          <select onChange={customerPicked}>{renderEntities()}</select>
        </>
      )}
    </div>
  );
};
