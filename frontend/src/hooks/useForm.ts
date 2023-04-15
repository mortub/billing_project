import { useState } from "react";
import { ApiAervice } from "../services/ApiService";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    ApiAervice.setBody({ ...values, [event.target.name]: event.target.value });
  };

  return {
    onChange,
    values,
    setValues,
  };
};
