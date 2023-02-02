import { LOG_LEVEL } from "./env";

/** Signature of a logging function */
export interface LogFn {
  (/*context?: any, */ message?: any, ...optionalParams: any[]): void;
}

/** Basic logger interface */
export interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

/** Log levels */
export type LogLevel = "log" | "warn" | "error";

const NO_OP: LogFn = (
  // context?: any,
  message?: any,
  ...optionalParams: any[]
) => {};

/** Logger which outputs to the browser console */
export class ConsoleLogger {
  // readonly context: String;
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor(/*context: any, */ options?: { level?: LogLevel }) {
    // const ctx = context;
    const { level } = options || {};

    this.error = console.error.bind(console);

    if (level === "error") {
      this.warn = NO_OP;
      this.log = NO_OP;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level === "warn") {
      this.log = NO_OP;

      return;
    }

    this.log = console.log.bind(console);
  }
}

// export const logger = (context: string) => new ConsoleLogger({ level: LOG_LEVEL });
export const logger = new ConsoleLogger({ level: LOG_LEVEL });
