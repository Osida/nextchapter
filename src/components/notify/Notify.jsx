import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let notify;

function Notify(props) {
  notify = () => toast(props.message);

  //   console.log("props.message = ", props.message);

  const handleType = () => {
    let typeOfMsg;
    if (props.type == "error") {
      typeOfMsg = toast.error("❌ Error Message!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (props.type == "success") {
      typeOfMsg = toast.success("👍 Success Message!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (props.type == "info") {
      typeOfMsg = toast.info("🔍 Info Message!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return typeOfMsg;
  };

  return (
    <div>
      {() => notify()}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export { Notify, notify };
