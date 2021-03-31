import { Height } from '@material-ui/icons';
import React from 'react';
import { Navbar } from '../components';
import './SignIn.css'

export default function SignIn() {
  return (
    <div className="signIn">
      <div className="leftDiv">
        <div className="catimg">
          <img src="/images/undraw_welcome_cats.svg" alt="Cat Picture"></img>
        </div>
      </div>
      <div className="rightDiv">
        <div className="header">
          <p>Hello</p>
        </div>
        <div className="header2">
          <p>Sign into your account</p>
        </div>
        <form action="?" method="post">
          <div className="emailContainer">
            <div className="email">
              <label for="email"></label>
              <input type="text" placeholder="Student Email" name="email" required></input>
            </div>
          </div>
          <div className="passwordContainer">
            <div className="password">
              <label for="password"></label>
              <input type="password" placeholder="password" name="password" required></input>
            </div>
          </div>
          <div className="button">
            <button type="submit">SignIn</button>
          </div>
          <div className="forgotContainer">
            <a href="#">Forgot Username/Password</a>
          </div>
          <div className="signuphere">
            <p>Dont have an account signup <a href="#">Here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}