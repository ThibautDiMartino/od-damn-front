import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect, useState } from "react";
// import Icon from "../Icon";
import "./Avatar.scss";
import { sizeType, sizeTypeToClassMap } from "../../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../../common/AuthContext";
import { LocalStorageKeys } from "../../../models/localStorage";
import m1 from "../../../static/m1.png";
import m2 from "../../../static/m2.png";
import m7 from "../../../static/m7.png";
import m8 from "../../../static/m8.png";
import av1 from "../../../static/av1.png";
import av2 from "../../../static/av2.png";

const Avatar: FC<AvatarType> = ({ size = sizeType.MEDIUM, image }) => {
  const [userAvatar, setUserAvatar] = useState(image);
  const user = JSON.parse(
    localStorage.getItem(
      LocalStorageKeys.FIREBASE_AUTH_USER_CREDENTIALS
    ) as string
  );
  const classn = ["avatar", `is-${size}`].join(" ");

  const getRandomAvatar = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const defineUserAvatar = () => {
    if (image) return;
    switch (user.gender) {
      case "male":
        setUserAvatar(getRandomAvatar(2) === 0 ? m1 : m7);
        break;
      case "female":
        setUserAvatar(getRandomAvatar(2) === 0 ? m2 : m8);
        break;
      default:
        setUserAvatar(getRandomAvatar(2) === 0 ? av1 : av2);
        break;
    }
  };

  // useEffect(() => {
  //   defineUserAvatar()
  // }, []);

  return (
    <div
      className={["od-avatar is-clickable", size && sizeTypeToClassMap[size]]
        .join(" ")
        .replaceAll(" false", "")}
    >
      <img src={userAvatar} alt="Avatar" className={classn} />
    </div>
  );
};

export default Avatar;
