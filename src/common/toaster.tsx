import { toast, ToastContainer } from "react-toastify";

/** Signature of a toasting function */
export interface ToastFn {
  (message?: any, ...optionalParams: any[]): void;
}

/** Basic toaster interface */
export interface Toaster {
  info: ToastFn;
  success: ToastFn;
  warning: ToastFn;
  error: ToastFn;
}

/** Toast levels */
export type ToastLevel = "info" | "success" | "warning" | "error";

const NO_OP: ToastFn = (message?: any, ...optionalParams: any[]) => {};

/** Logger which outputs to the browser console */
export class ToasterManager implements Toaster {
  readonly info: ToastFn;
  readonly success: ToastFn;
  readonly warning: ToastFn;
  readonly error: ToastFn;

  constructor(options?: { level?: ToastLevel }) {
    const { level } = options || {};

    this.error = toast.error.bind(toast);

    if (level === "error") {
      this.warning = NO_OP;
      this.success = NO_OP;
      this.info = NO_OP;

      return;
    }

    this.warning = toast.warning.bind(toast);

    if (level === "warning") {
      this.success = NO_OP;
      this.info = NO_OP;

      return;
    }

    this.success = toast.info.bind(toast);

    if (level === "success") {
      this.info = NO_OP;

      return;
    }

    this.info = toast.info.bind(toast);
  }
}

const ToasterContainer = () => {
  return <ToastContainer />;
};

export const toaster = new ToasterManager({ level: "info" });

export default ToasterContainer;
