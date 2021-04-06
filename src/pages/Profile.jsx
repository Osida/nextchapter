import React from "react";
import { Navbar, Footer, Profile, signedIn } from "../components";
import Profile_ from "../components/profile/Profile";

export default function ProfilePage() {
  return (
    <div className="profile">
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      <Profile />
      <Footer linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
    </div>
  );
}
