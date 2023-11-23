import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = (props) => {
    return (
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
        onClose={props.onClose}
      ></div>
    );
  };

  const Overlay = () => {
    return (
      <div className="fixed top-[23vh] left-1/2 transform translate-x-[-50%] w-[34%] h-[31rem] bg-white p-[1rem] rounded-xl shadow-2xl z-40">
        <div>{props.children}</div>
      </div>
    );
  };
  const portalElements = document.getElementById("overlays");
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

export default Modal;
