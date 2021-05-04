import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Btn, btnColor, btnSize, Input } from "..";
import ROUTES from "../../pages";
import * as S from "./SignUpFormStyles";
import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useForm } from "../profile/useForm_";
import Controls from "../controls/Controls";

const initialFValues2 = {
  email: "",
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

export default function PasswordReset({ data }) {
  const classes = useStyles();
  const studentEmailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate2()) {
      try {
        // console.log("in reset try");
        setMessage("");
        setError("");
        setLoading(true);
        let isSent = await resetPassword(values?.email);
        if (isSent) {
          setMessage("Check your email's inbox for further instructions.");
          alert("Check your email's inbox for further instructions.");
        }
      } catch (error) {
        var errorMessage = error.message;
        setError("Failed to send reset password = ", errorMessage);
        alert(errorMessage);
      }
      setLoading(false);
    }
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    // console.log("temp = ", temp);
    // console.log("fieldValues = ", fieldValues);

    if ("email" in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) || fieldValues.email === ""
          ? ""
          : "Email is not valid.";

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
              </S.Row1>

              <S.BtnWrap>
                <Btn type="submit" {...btnColor.primary} disabled={loading}>
                  Reset Password
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
