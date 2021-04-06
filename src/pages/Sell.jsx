import React from "react";
import { Navbar, Footer, signedIn } from "../components";
import { SellBookForm } from "../components/forms/SellBookForm";

export default function Sell() {
  return (
    <div className="sell" style={{ background: "#44318D" }}>
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      <SellBookForm />
      <Footer linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
    </div>
  );
}
