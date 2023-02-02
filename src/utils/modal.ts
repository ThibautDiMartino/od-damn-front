export enum ModalAlign {
  TOP = "top",
  CENTER = "middle",
  BOTTOM = "bottom",
}

export enum ModalWidth {
  MIN = "min",
  MEDIUM = "medium",
  FULL = "full",
}

export const modalAlignToClassMap = {
  [ModalAlign.TOP]: "has-align-items-start",
  [ModalAlign.CENTER]: "has-align-items-center",
  [ModalAlign.BOTTOM]: "has-align-items-end",
};

export const modalWidthToClassMap = {
  [ModalWidth.MIN]: "is-min",
  [ModalWidth.MEDIUM]: "is-medium",
  [ModalWidth.FULL]: "is-full",
};
