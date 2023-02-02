import { useCookies } from "react-cookie";
import { CookiesKeys } from "../models/cookie";
import { METHOD } from "./env";

export interface CookiesFn {
  (key: CookiesKeys, value?: any): void;
}

export interface Cookie {
  get: CookiesFn;
  set: CookiesFn;
  remove: CookiesFn;
}

export type Method = "get" | "set" | "remove";

const CK: CookiesFn = (key: CookiesKeys, value?: any) => {};

const CookieTrick = (keys: string[]) => {
  const [cookies, setCookies, removeCookies] = useCookies(keys);

  return { cookies, setCookies, removeCookies };
};

export class Cookies implements Cookie {
  readonly get: CookiesFn;
  readonly set: CookiesFn;
  readonly remove: CookiesFn;

  constructor(options?: { method?: Method }) {
    const { method } = options || {};
    const { cookies, setCookies, removeCookies } = CookieTrick(
      Object.keys(CookiesKeys)
    );

    this.remove = (key) => removeCookies(key);

    if (method === "remove") {
      this.set = CK;
      this.get = CK;

      return;
    }

    this.set = (key, value) => setCookies(key, value);

    if (method === "set") {
      this.get = CK;

      return;
    }

    this.get = (key) => {
      console.log(key);
      return cookies[key];
    };
  }
}

export const cookies = new Cookies({ method: METHOD });
