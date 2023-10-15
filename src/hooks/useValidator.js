import { useCallback, useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const message = event.target.validationMessage;
    const form = event.target.form;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: message,
    });

    setIsFormValid(form.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    errors,
    handleInputChange,
    isFormValid,
    resetForm,
  };
}
