import React from "react";
import { Navbar, Footer, signedIn } from "../components";

export default function Trade() {
  return (
    <div className="trade">
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      <h1>This is the Trade page</h1>
      {/* <Footer /> */}
    </div>
  );
}
