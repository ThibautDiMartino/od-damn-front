import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ListItemType = {
  leftIcon?: IconDefinition;
  label: string;
  rightIcon?: IconDefinition;
  onClick: (modalTitle: string) => void;
};
