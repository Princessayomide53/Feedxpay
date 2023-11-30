import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#017A59] bg-opacity-20 z-40"
      onClick={props.onClose}
    />
  );
};

const Overlay = (props) => {
  return (
    <div className="fixed top-[23vh] left-[25rem]  w-[34%] h-[30.7rem] bg-white p-[1rem] rounded-xl shadow-2xl z-40">
      <div>{props.children}</div>
    </div>
  );
};
const portalElements = document.getElementById("overlay2");
const Modal3 = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElements
      )}
    </>
  );
};

export default Modal3;
