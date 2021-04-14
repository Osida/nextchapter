import React from "react";
import { PasswordReset } from "../components";
import { forgotData } from "../components";

export default function ResetPassword() {
  return (
    <div className="PasswordReset">
      <PasswordReset data={forgotData} />
    </div>
  );
}
