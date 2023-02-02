import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ListItemType } from "./list-item";

const ListItemMenu: FC<ListItemType> = ({
  leftIcon,
  label,
  rightIcon,
  onClick,
}) => {
  return (
    <div className="list-item is-clickable" onClick={() => onClick(label)}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className="left-icon" />}
      <span className="label">{label}</span>
      <FontAwesomeIcon
        icon={rightIcon ? rightIcon : faArrowRight}
        className="right-icon"
      />
    </div>
  );
};

export default ListItemMenu;
