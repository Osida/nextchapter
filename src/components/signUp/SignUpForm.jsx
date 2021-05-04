import { makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Btn, btnColor, Input } from "..";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../database";
import ROUTES from "../../pages";
import Controls from "../controls/Controls";
import { useForm } from "../profile/useForm_";
import * as S from "./SignUpFormStyles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const initialFValues2 = {
  university: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  showPassword: false,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  inputBorder: {
    "& .MuiInputBase-root": {
      borderRadius: "100px",
    },
  },
  paperStyle1: {
    padding: theme.spacing(7),
    flex: "4",
  },
  paperStyle2: {
    flex: "1",
    marginLeft: "1em",
    padding: "2em 1em",
  },
  header: {
    marginBottom: "1.2em",
    textAlign: "center",
  },
  btnText: {
    padding: "0",
    margin: "0",
    textAlign: "start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    marginBottom: "1.5em",
  },
}));

export default function SignUpForm({ data }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const universityRef = useRef();
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handleSubmit");

    if (validate2()) {
      try {
        setError("");
        setLoading(true);
        // console.log("values = ", values);
        let username = values?.email.substring(0, values?.email.indexOf("@"));
        // console.log("username = ", username);
        let newUser = {
          email: values?.email,
          password: values?.password,
          favorite_books: [],
          firstName: values?.firstName,
          lastName: values?.lastName,
          phoneNumber: values?.phoneNumber,
          university: values?.university,
          username: username,
        };
        let isSignedUp = await signUp(newUser);
        if (isSignedUp) history.push(ROUTES.HOME);
      } catch (error) {
        var errorMessage = error.message;
        setError("Failed to create a account = ", errorMessage);
        console.log("Failed to create a account = ", error);
        alert(errorMessage);
      }
      setLoading(false);
    }
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    // console.log("temp = ", temp);
    // console.log("fieldValues = ", fieldValues);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required.";
    if ("phoneNumber" in fieldValues)
      temp.phoneNumber =
        fieldValues.phoneNumber.length > 9
          ? ""
          : "Minimum 10 numbers required.";
    if ("university" in fieldValues)
      temp.university = fieldValues.university ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email =
        emailPattern.test(fieldValues.email) || fieldValues.email === ""
          ? ""
          : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 7 || fieldValues.password === ""
          ? ""
          : "Minimum 8 numbers required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    // resetForm,
  } = useForm(initialFValues2, true, validate2);

  return (
    <>
      <S.SignUpContainer>
        <S.SignUpForm>
          <S.SignUpLeft>
            <S.LinkWrap to={ROUTES.HOME}>{data.homeLinkText}</S.LinkWrap>
            <S.SignUpImage src={data.signUpImage} alt={data.signUpImageAlt} />
          </S.SignUpLeft>

          <S.SignUpRight>
            <S.Header>{data.headerText}</S.Header>

            <S.Form onSubmit={handleSubmit}>
              <S.Row2>
                <S.HalfInput>
                  {/* <Input
                    type={data.typeText}
                    placeholder={data.firstName}
                    ref={firstNameRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="First name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    placeholder="Jane"
                    type="text"
                    fullWidth
                    required
                  />
                </S.HalfInput>
                <S.HalfInput>
                  {/* <Input
                    type={data.typeText}
                    placeholder={data.lastName}
                    ref={lastNameRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="Last name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    placeholder="Doe"
                    type="text"
                    fullWidth
                    required
                  />
                </S.HalfInput>
                <S.HalfInput>
                  {/* <Input
                    type={data.typeTel}
                    placeholder={data.phoneNumber}
                    ref={phoneNumberRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="Phone number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleInputChange}
                    error={errors.phoneNumber}
                    placeholder="2435558888"
                    type="tel"
                    fullWidth
                    required
                  />
                </S.HalfInput>
                <S.HalfInput>
                  {/* <Input
                    type={data.typeText}
                    placeholder={data.university}
                    ref={universityRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="University"
                    name="university"
                    value={values.university}
                    onChange={handleInputChange}
                    error={errors.university}
                    placeholder="Towson"
                    type="text"
                    fullWidth
                    required
                  />
                </S.HalfInput>
              </S.Row2>

              <S.Row1>
                <S.FullInput>
                  {/* <Input
                    type={data.typeEmail}
                    placeholder={data.studentEmail}
                    ref={studentEmailRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    placeholder="user@email.com"
                    type="email"
                    fullWidth
                    required
                  />
                </S.FullInput>
                <S.FullInput>
                  {/* <Input
                    type={data.typePassword}
                    placeholder={data.password}
                    ref={passwordRef}
                  /> */}
                  <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    placeholder="Password"
                    // type="password"
                    type={values.showPassword ? "text" : "password"}
                    fullWidth
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </S.FullInput>
              </S.Row1>

              <S.BtnWrap>
                <Btn type="submit" {...btnColor.primary} disabled={loading}>
                  Create account
                </Btn>
              </S.BtnWrap>
            </S.Form>

            <S.Text>
              {data.text}
              <S.TextLink to={ROUTES.SIGN_IN}> {data.textLink}</S.TextLink>
            </S.Text>
          </S.SignUpRight>
        </S.SignUpForm>
      </S.SignUpContainer>
    </>
  );
}
