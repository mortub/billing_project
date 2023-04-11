import React, { useContext } from "react";
import { CreateCustomerForm } from "./CreateCustomerFrom";
import { UpdateCustomerForm } from "./UpdateCustomerForm";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Entities } from "../@types/enums/EntitiesEnum";
import { Actions } from "../@types/enums/ActionsEnum";
import { CreateTransactionForm } from "./CreateTransactionForm";
import { UpdateTransactionForm } from "./UpdateTransactionForm";

export const EntityForm = () => {
  const { state } = useContext(AppContext) as StateAndDispatch;

  const Components = {
    [`${Entities.CUSTOMERS}${Actions.CREATE}`]: <CreateCustomerForm />,
    [`${Entities.CUSTOMERS}${Actions.UPDATE}`]: <UpdateCustomerForm />,
    [`${Entities.TRANSACTIONS}${Actions.CREATE}`]: <CreateTransactionForm />,
    [`${Entities.TRANSACTIONS}${Actions.UPDATE}`]: <UpdateTransactionForm />,
  };

  const pickFormAccordingToState = () => {
    const { entity, action } = state;
    const componentName = `${entity}${action}`;
    return Components[componentName];
  };

  return <div>{pickFormAccordingToState()}</div>;
};
