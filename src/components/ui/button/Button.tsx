import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  sizeType,
  colorType,
  colorTypeToClassMap,
  widthType,
  widthTypeToClassMap,
  sizeTypeToClassMap,
} from "../../../utils/types";
import "./Button.scss";

import { FC } from "react";
import "./Button.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ButtonType } from "./button-type";

const Button: FC<ButtonType> = ({
  color = colorType.PRIMARY,
  size = sizeType.SMALL,
  outlined = false,
  loading = false,
  squared = false,
  blank = false,
  icon,
  className,
  width = widthType.MIN,
  label,
  style,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "od-button is-clickable",
        className && className,
        color && colorTypeToClassMap[color],
        size && sizeTypeToClassMap[size],
        width && widthTypeToClassMap[width],
        outlined && "is-outlined",
        loading && "is-loading",
        (blank || loading) && "is-blank",
        squared && "is-squared",
        style && style,
      ]
        .join(" ")
        .replaceAll(" false", "")}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        // <Icon iconSvg={faSpinner} loading />
        <></>
      ) : (
        <>
          {icon && (
            // <Icon iconSvg={icon} type={} iconSize={buttonSize} />
            <FontAwesomeIcon icon={icon} />
          )}
          {label && <span className="label">{label}</span>}
          {icon && label && (
            // <Icon
            //   iconSvg={icon}
            //   hidden
            //   type={}
            //   iconSize={buttonSize}
            // />
            <FontAwesomeIcon icon={icon} />
          )}
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
