import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeys } from "../../models/localStorage";
import { RouteName } from "../../utils/router";
import "./header.scss";
import { sizeType } from "../../utils/types";
import Avatar from "../ui/avatar/Avatar";
import Menu from "../common/header-menu/Menu";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // useEffect(() => {
  //   const userCredentials = localStorage.getItem(
  //     LocalStorageKeys.FIREBASE_AUTH_USER_CREDENTIALS
  //   ) as string;
  //   if (userCredentials) setUser(JSON.parse(userCredentials));
  //   else navigate(RouteName.CONNECT);
  // }, []);
  return (
    <div className="header">
      <div className="od-logo">
        <span className="O">O</span>
        <span className="D">D</span>
      </div>
      <div className="user-menu is-clickable" onClick={() => handleMenu()}>
        <span className="display-name">
          {/* {user?.displayName ? user.displayName : user?.email?.split("@")[0]} */}
        </span>
        {/* <Avatar size={sizeType.SMALL} /> */}
      </div>
      {isMenuActive && <Menu closeModal={handleMenu} />}
    </div>
  );
};

export default Header;
