import { FC } from "react";
import "./ModalWrapper.scss";

interface IModalWrapper {
  isOpen?: boolean;
  children: JSX.Element;
}

const ModalWrapper: FC<IModalWrapper> = ({ isOpen, children }) => {
  return (
    <div
      className={["od-modal-wrapper", isOpen && "is-open"]
        .join(" ")
        .replaceAll(" false", "")}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
