import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Loader
        type="Oval"
        color="#D83F87"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
