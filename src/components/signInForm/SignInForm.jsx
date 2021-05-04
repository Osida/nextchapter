import {
  ButtonBase,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import ROUTES from "../../pages";
import Controls from "../controls/Controls";
import { Btn, btnColor, Input } from "../index";
import { useForm } from "../profile/useForm_";
import * as S from "../signUp/SignUpFormStyles";

const initialFValues2 = {
  email: "",
  password: "",
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

export default function SignIn({ data }) {
  const classes = useStyles();
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate2()) {
      try {
        setError("");
        setLoading(true);
        // console.log("values = ", values)
        let isSignedIn = await signIn(values.email, values.password);
        if (isSignedIn) history.push(ROUTES.HOME);
      } catch (error) {
        setError("Failed to create a account = ", error.message);
        alert(error);
        setError("");
      }
      setLoading(false);
    }
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    // console.log("temp = ", temp);
    console.log("fieldValues = ", fieldValues);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

            <S.SubHeader>{data.subHeaderText}</S.SubHeader>

            <S.Form onSubmit={handleSubmit}>
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
                  {/* <Controls.Input
                    className={classes?.inputBorder}
                    variant="outlined"
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    placeholder=""
                    type="password"
                    fullWidth
                    required
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
                <ButtonBase>
                  <Btn type="submit" {...btnColor.primary} disabled={loading}>
                    Sign In
                  </Btn>
                </ButtonBase>
              </S.BtnWrap>
            </S.Form>

            <S.ResetText to={ROUTES.RESET_PASSWORD}>
              {data.resetPassword}
            </S.ResetText>

            <S.Text>
              {data.text}
              <S.TextLink to={ROUTES.SIGN_UP}> {data.textLink}</S.TextLink>
            </S.Text>
          </S.SignUpRight>
        </S.SignUpForm>
      </S.SignUpContainer>
    </>
  );
}
