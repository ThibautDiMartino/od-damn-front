import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  sizeType,
  colorType,
  colorTypeToClassMap,
  widthType,
  widthTypeToClassMap,
  sizeTypeToClassMap,
} from "../../../utils/types";
import "./ButtonCircle.scss";

import { FC } from "react";
import "./ButtonCircle.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ButtonCircleType } from "./button-circle";

const ButtonCircle: FC<ButtonCircleType> = ({
  color = colorType.PRIMARY,
  size = sizeType.SMALL,
  outlined = false,
  loading = false,
  icon,
  width = widthType.MIN,
  style,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "od-button-circle is-clickable",
        color && colorTypeToClassMap[color],
        size && sizeTypeToClassMap[size],
        width && widthTypeToClassMap[width],
        outlined && "is-outlined",
        loading && "is-loading",
        style && style,
      ]
        .join(" ")
        .replaceAll(" false", "")}
      onClick={onClick}
      {...props}
    >
      {loading || !icon ? (
        // <Icon iconSvg={faSpinner} loading />
        <FontAwesomeIcon icon={faSpinner} />
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
    </button>
  );
};

export default ButtonCircle;
