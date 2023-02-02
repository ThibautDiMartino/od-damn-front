import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonCircleType = {
  color?: string;
  outlined?: boolean;
  loading?: boolean;
  icon?: IconDefinition;
  width?: string;
  children?: JSX.Element;
  style?: string;
  onClick?: () => void;
  size?: string;
};
