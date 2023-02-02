import {
  faCogs,
  faSignOut,
  faTimes,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useModal } from "../../../common/ModalContext";
import ListItemMenu from "../list-items/ListItemMenu";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import "./Menu.scss";
import { ModalTitle, modalTitleToModalComponentMap } from "../modals/modal";

const Menu: FC<HeaderMenuType> = ({ closeModal }) => {
  const { setModalOpen } = useModal();

  const openModal = (modalTitle: string) => {
    closeModal();
    setModalOpen(modalTitleToModalComponentMap[modalTitle as ModalTitle]);
  };

  return (
    <div className={["header-menu"].join(" ").replaceAll(" false", "")}>
      <div className="menu-head">
        <FontAwesomeIcon icon={faTimes} onClick={() => closeModal()} />
      </div>
      <section className="pages">
        <h1 className="title">Pages</h1>
        <ListItemMenu
          leftIcon={faUserAlt}
          label={"Profile"}
          onClick={openModal}
        />
        <ListItemMenu
          leftIcon={faCogs}
          label={"Settings"}
          onClick={openModal}
        />
      </section>
      <section className="settings">
        <h1 className="title">Settings</h1>
        <ThemeSwitch />
      </section>
      <section className="actions">
        <h1 className="title">Actions</h1>
        <ListItemMenu
          leftIcon={faSignOut}
          label={"Sign out"}
          onClick={openModal}
        />
      </section>
    </div>
  );
};

export default Menu;
