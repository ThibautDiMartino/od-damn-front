import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Component,
  createElement,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { useBus } from "react-bus";
import { useModal } from "../../../common/ModalContext";
import { widthType, widthTypeToClassMap } from "../../../utils/types";
import ProfileModal from "../modals/ProfileModal";
import ModalWrapper from "./modal-wrapper/ModalWrapper";

// interface IModalRoot {
//   title: string;
//   isClosable: boolean;
//   width: string;
//   content: JSX.Element;
// }

enum ModalEvent {
  OPEN = "open",
  CLOSE = "close",
}

type ModalOptions = {
  component?: JSX.Element;
  // props?: Record<string, unknown>;
  // modalAlign?: string;
  // isClosable?: boolean;
};

const defaultModalOptions = {
  // isOpen: false,
  component: (<></>) as JSX.Element,
  // isClosable: true,
  // props: undefined as Record<string, unknown> | undefined,
  // modalAlign: ModalAlign.Bottom,
};

const ModalRoot = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const bus = useBus();
  const { isOpen, setModalOpen, modal } = useModal();
  // const [{ component, isClosable, props }, setOptions] =
  //   useState<ModalOptions>(defaultModalOptions);

  // const handleOpen = (options: ModalOptions) => {
  //   if (isOpen) return;
  //   // setOptions(options);
  //   setModalOpen(true);
  // };
  // const ModalContent = createElement(component, props);

  // const handleClose = () => {
  //   if (!isOpen) return;
  //   setModalOpen();
  // };

  // useEffect(() => {
  /* eslint-disable no-restricted-globals */
  // bus.on(ModalEvent.OPEN, (options: ModalOptions) => handleOpen(options));
  // bus.on(ModalEvent.CLOSE, () => handleClose);
  // }, []);

  return (
    <>
      {isOpen && modal && (
        <ModalWrapper>
          {/* <ProfileModal /> */}
          {modal}
        </ModalWrapper>
      )}
    </>
  );
};

export default ModalRoot;
