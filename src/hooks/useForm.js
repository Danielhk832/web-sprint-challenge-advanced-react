// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initialValues) => {
  const [values, setValues] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValues));
      return initialValues;
    }
  });

  const setStoredValues = (values) => {
    localStorage.setItem(key, JSON.stringify);
    setValues(values);
  };

  return [values, setStoredValues];
};

const useForm = (initialValues) => {
  const [values, setValues] = useLocalStorage("fields", initialValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};

export default useForm;
