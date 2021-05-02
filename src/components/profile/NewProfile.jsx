import {
  ButtonBase,
  Grid,
  InputAdornment,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useState } from "react";
import Input from "../form/controls/Input";
import * as S from "./ProfileStyles";
import { Form, useForm } from "./useForm";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import "./newstyles.scss";

const initialFValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  mobile: "",
  university: "",
  password: "",
  confirmPassword: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      borderRadius: "100px",
    },
  },
  pageContent: {
    // margin: theme.spacing(8),
    padding: theme.spacing(7),
    flex: "4",
  },
  pageContent2: {
    flex: "1",
    marginLeft: "1em",
    // background: "green",
  },
}));

export default function NewProfile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("password" in fieldValues)
      temp.password =
        fieldValues.password > 7 ? "" : "Minimum 8 numbers required.";
    if ("confirmPassword" in fieldValues)
      temp.confirmPassword =
        fieldValues.confirmPassword > 7 ? "" : "Minimum 8 numbers required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("testing ...");
  };

  const FormRow1 = ({ values, inputs }) => (
    <>
      <Grid container item spacing={3}>
        <Grid item xs={4}>
          <h1>
            <span>
              User Profile <S.IconUser />
            </span>
          </h1>
          <p>Your user profile information will be shown to other users.</p>
        </Grid>
        <Grid container item xs={8} direction="row" alignItems="end">
          {inputs.map((element, key) => (
            <Grid key={key} item xs={6}>
              <Input
                className={classes.root}
                variant={element?.variant}
                label={element?.label}
                name={element?.name}
                value={element?.value}
                onChange={element?.onChange}
                error={element?.error}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );

  const FormRow2 = ({ values, inputs }) => (
    <>
      <Grid container item spacing={3}>
        <Grid item xs={4}>
          <h1>
            <span>
              Personal Details <S.IconUser />
            </span>
          </h1>
          <p>Your user profile information will be shown to other users.</p>
        </Grid>
        <Grid container item xs={8} direction="row">
          {inputs.map((element, key) => (
            <Grid key={key} item xs={6}>
              <Input
                className={classes.root}
                variant={element?.variant}
                label={element?.label}
                name={element?.name}
                value={element?.value}
                onChange={element?.onChange}
                error={element?.error}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );

  const FormRow3 = ({ values, inputs }) => (
    <>
      <Grid container item spacing={3}>
        <Grid item xs={4}>
          <h1>
            <span>
              Password <S.IconUser />
            </span>
          </h1>
          <p>Your user profile information will be shown to other users.</p>
        </Grid>
        <Grid container item xs={8} direction="row">
          {inputs.map((element, key) => (
            <Grid key={key} item xs={6}>
              <Input
                className={classes.root}
                variant={element?.variant}
                label={element?.label}
                name={element?.name}
                value={element?.value}
                onChange={element?.onChange}
                error={element?.error}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );

  const inputRow1Data = [
    {
      className: classes.root,
      variant: "outlined",
      label: "Display name",
      name: "displayName",
      value: values.university,
      onChange: handleInputChange,
      error: errors.displayName,
    },
    {
      className: classes.root,
      variant: "outlined",
      label: "University",
      name: "university",
      value: values.university,
      onChange: handleInputChange,
    },
  ];

  const inputRow2Data = [
    {
      className: classes.root,
      variant: "outlined",
      label: "First name",
      name: "firstName",
      value: values.firstName,
      onChange: handleInputChange,
      error: errors.firstName,
    },
    {
      className: classes.root,
      variant: "outlined",
      label: "Last name",
      name: "lastName",
      value: values.lastName,
      onChange: handleInputChange,
      error: errors.lastName,
    },
    {
      className: classes.root,
      variant: "outlined",
      label: "Email",
      name: "email",
      value: values.email,
      onChange: handleInputChange,
      error: errors.email,
    },
  ];

  const inputRow3Data = [
    {
      className: classes.root,
      variant: "outlined",
      label: "Password",
      name: "password",
      value: values.confirmPassword,
      onChange: handleInputChange,
      error: errors.confirmPassword,
    },
    {
      className: classes.root,
      variant: "outlined",
      label: "Confirm Password",
      name: "confirmPassword",
      value: values.confirmPassword,
      onChange: handleInputChange,
      error: errors.confirmPassword,
    },
  ];
  const style1 = {
    display: "flex",
    margin: "5em",
    maxHeight: "850px",
  };

  const style2 = {
    display: "flex",
    // alignItems: "center",
    // alignContent: "center"
    // background: "yellow",
  };

  return (
    <>
      <div style={style1}>
        <Paper className={classes.pageContent}>
          <Form onSubmit={handleSubmit}>
            {/* <Grid container> */}
              <Grid container  xs={12}>
                <FormRow1 values={values} inputs={inputRow1Data} />
                <S.Divider />
                <FormRow2 values={values} inputs={inputRow2Data} />
                <S.Divider />
                <FormRow3 values={values} inputs={inputRow3Data} />
                <S.Divider />
              </Grid>
            {/* </Grid> */}
            <button type="submit">click</button>
          </Form>
        </Paper>

        <Paper
          className={`${classes.pageContent2} removeScrollBar`}
          style={{ padding: "2em 1em" }}
        >
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <h2 style={{ marginBottom: "1.2em" }}>Your Post</h2>
            </Grid>

            <ButtonBase style={{ width: "100%" }} onClick={handleClick}>
              <Grid container item xs={12} style={style2}>
                <LibraryBooksIcon />
                <p style={{ width: "100%", flex: 1 }}>
                  Cracking the Coding
                </p>
              </Grid>
            </ButtonBase>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
            <hr
              style={{
                background: "linear-gradient(0deg, #303030, #303030)",
                opacity: "0.2",
                width: "100%",
                margin: "1em 0",
              }}
            />
          </Grid>
        </Paper>
      </div>
    </>
  );
}
