import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { variant, name, label, value, error = null, onChange, defaultValue, ...other } = props;

  return (
    <TextField
      variant={variant || "standard"}
      label={label || "label"}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
}
