import ProfileModal from "./ProfileModal";

export enum ModalTitle {
  PROFILE = "Profile",
}

export const modalTitleToModalComponentMap = {
  [ModalTitle.PROFILE]: <ProfileModal title="Profile" isClosable />,
};
