import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-20"
    ></div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed top-[20vh] left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg z-30 w-[90%] max-w-xl">
      {children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
