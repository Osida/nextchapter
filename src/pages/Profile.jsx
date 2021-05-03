import React from "react";
import { Navbar, Footer, Profile, signedIn, ProfileBanner } from "../components";
import Profile_ from "../components/profile/Profile_";

export default function ProfilePage() {
  return (
    <div className="profile">
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      {/* <Profile /> */}
      <ProfileBanner />
      <Profile_ />
      <Footer linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
    </div>
  );
}
