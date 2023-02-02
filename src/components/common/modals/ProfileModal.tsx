import { FC } from "react";
import Modal from "../../ui/modal/Modal";

const ProfileModal: FC<ModalType> = ({ width, title, isClosable }) => {
  return (
    <Modal width={width} title={title} isClosable={isClosable}>
      <div className="user info">user</div>
    </Modal>
  );
};

export default ProfileModal;
