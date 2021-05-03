import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function useForm(initialFValues2, validateOnChange = false, validate2) {
  const [values, setValues] = useState(initialFValues2);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) validate2({ [name]: value });
  };

  //   const resetForm = () => {
  //     setValues(initialFValues);
  //     setErrors({});
  //   };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    // resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
