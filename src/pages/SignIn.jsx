import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Btn, btnColor } from "../components";
import { useAuth } from "../context/AuthContext";
import ROUTES from "../pages";
import "./SignIn.css";

export default function SignIn() {
  const studentEmailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(studentEmailRef.current.value, passwordRef.current.value);
      history.push(ROUTES.HOME);
    } catch (error) {
      setError("Failed to create a account");
    }
    setLoading(false);
  };

  return (
    <div className="signIn">
      <div className="leftDiv">
        <div className="catimg">
          <img src="/images/undraw_welcome_cats.svg" alt="Cat Picture" />
        </div>
      </div>
      <div className="rightDiv">
        <div className="header">
          <p>Hello</p>
        </div>
        <div className="header2">
          <p>Sign into your account</p>
        </div>

        <form action="?" method="post" onSubmit={handleSubmit}>
          <div className="emailContainer">
            <div className="email">
              <label for="email"></label>
              <input
                type="text"
                placeholder="Student Email"
                name="email"
                required
                ref={studentEmailRef}
              ></input>
            </div>
          </div>
          <div className="passwordContainer">
            <div className="password">
              <label for="password"></label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                ref={passwordRef}
              ></input>
            </div>
          </div>
          <div className="button">
            <Btn type="submit" {...btnColor.primary}>
              Sign in
            </Btn>
          </div>
          <div className="forgotContainer">
            <a href={ROUTES.RESET_PASSWORD}>Forgot your Password ?</a>
          </div>
          <div className="signuphere">
            <p>
              Don't have an account<a href={ROUTES.SIGN_UP}> sign up Here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
