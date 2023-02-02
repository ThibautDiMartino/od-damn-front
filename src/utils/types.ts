export const sizeType = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const colorType = {
  PRIMARY_DARK: "primary-dark",
  PRIMARY: "primary",
  PRIMARY_LIGHT: "primary-light",
  SECONDARY_DARK: "secondary-dark",
  SECONDARY: "secondary",
  SECONDARY_LIGHT: "secondary-light",
  TERTIARY_DARK: "tertiary-dark",
  TERTIARY: "tertiary",
  TERTIARY_LIGHT: "tertiary-light",
};

export const widthType = {
  MIN: "min",
  ONE_FIFTH: "one_fifth",
  ONE_FOURTH: "one_fourth",
  ONE_THIRD: "one_third",
  HALF: "half",
  TWO_THIRD: "two_third",
  THREE_FOURTH: "three_fourth",
  FOUR_FIFTH: "four_fifth",
  FULL: "full",
};

export const sizeTypeToClassMap = {
  [sizeType.SMALL]: "is-small",
  [sizeType.MEDIUM]: "is-medium",
  [sizeType.LARGE]: "is-large",
};

export const colorTypeToClassMap = {
  [colorType.PRIMARY_DARK]: "has-bg-primary-dark",
  [colorType.PRIMARY]: "has-bg-primary",
  [colorType.PRIMARY_LIGHT]: "has-bg-primary-light",
  [colorType.SECONDARY_DARK]: "has-bg-secondary-dark",
  [colorType.SECONDARY]: "has-bg-secondary",
  [colorType.SECONDARY_LIGHT]: "has-bg-secondary-light",
  [colorType.TERTIARY_DARK]: "has-bg-tertiary-dark",
  [colorType.TERTIARY]: "has-bg-tertiary",
  [colorType.TERTIARY_LIGHT]: "has-bg-tertiary-light",
};

export const widthTypeToClassMap = {
  [widthType.MIN]: "is-min",
  [widthType.ONE_FIFTH]: "is-one-fifth",
  [widthType.ONE_FOURTH]: "is-one-fourth",
  [widthType.ONE_THIRD]: "is-third",
  [widthType.HALF]: "is-half",
  [widthType.TWO_THIRD]: "is-two-third",
  [widthType.THREE_FOURTH]: "is-three-fourth",
  [widthType.FOUR_FIFTH]: "is-fourth-fifth",
  [widthType.FULL]: "is-full",
};
