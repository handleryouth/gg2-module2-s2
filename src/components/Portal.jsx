import { createPortal } from "react-dom";

const Portal = ({ children, visible }) => {
  return visible
    ? createPortal(children, document.querySelector("#portal"))
    : null;
};

export default Portal;
