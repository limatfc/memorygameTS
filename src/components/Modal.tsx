import iChildren from "../interfaces/iChildren";
import { createPortal } from "react-dom";

export default function Modal({ children }: iChildren) {
  return (
    <div>{createPortal(children, document.getElementById("modal-root")!)}</div>
  );
}
