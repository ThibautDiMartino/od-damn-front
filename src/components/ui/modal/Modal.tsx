import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useModal } from "../../../common/ModalContext";
import { widthTypeToClassMap } from "../../../utils/types";
import "./Modal.scss";

const Modal: FC<ModalType> = ({ width, title, isClosable, children }) => {
  const { toggleModal } = useModal();
  return (
    <div
      className={["od-modal", width && widthTypeToClassMap[width]].join(
        "".replaceAll(" false", "")
      )}
    >
      <div className="od-modal-head">
        <span className="is-flex-1">{title}</span>
        {isClosable && (
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleModal()}
            className="is-clickable"
          />
        )}
      </div>
      <div className="od-modal-content">{children}</div>
    </div>
  );
};

export default Modal;
