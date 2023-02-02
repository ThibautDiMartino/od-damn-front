import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonType = {
  label?: string;
  color?: string;
  outlined?: boolean;
  className?: string;
  loading?: boolean;
  blank?: boolean;
  squared?: boolean;
  width?: string;
  icon?: IconDefinition;
  style?: string;
  onClick?: () => void;
  size?: string;
  children?: JSX.Element;
};
