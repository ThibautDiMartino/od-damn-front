import React from "react";
import { useBus } from "react-bus";

/** Signature of a bus function */
export interface BusFn {
  (event?: any, ...optionalParams: any[]): void;
}

export interface EventBusEmitter {
  on: BusFn;
  off: BusFn;
}

/** Bus levels */
export type BusLevel = "on" | "off";

const NO_OP: BusFn = (event?: any, ...optionalParams: any[]) => {};

class EventBus implements EventBusEmitter {
  readonly on: BusFn;
  readonly off: BusFn;

  constructor(options?: { level?: BusLevel }) {
    // const bus = useBus();
    const { level } = options || {};

    this.off = NO_OP;

    // if (level === "on") {
    //   this.on = NO_OP;
    // }
    this.on = NO_OP;
  }
}
