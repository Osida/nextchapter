import React from "react";
import { Navbar, Footer, Profile } from "../components";

export default function ProfilePage() {
  return (
    <div className="profile">
      <Navbar />
      <Profile />
      {/* <Footer /> */}
    </div>
  );
}
