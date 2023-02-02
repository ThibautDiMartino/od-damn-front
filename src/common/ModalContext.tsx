import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  setModalOpen: (modal: JSX.Element) => void;
  toggleModal: () => void;
  modal: JSX.Element | null;
};

const defaultModalContext: ModalContextType = {
  isOpen: false,
  setModalOpen: (modal: JSX.Element) => {},
  toggleModal: () => {},
  modal: null,
};

const ModalContext = createContext<ModalContextType>(defaultModalContext);

const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultModalContext.isOpen);
  const [modal, setModal] = useState<JSX.Element | null>(
    defaultModalContext.modal
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setModal(null);
  };

  const setModalOpen = (modal: JSX.Element) => {
    toggleModal();
    setModal(modal);
  };

  const value = { isOpen, setModalOpen, toggleModal, modal };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
