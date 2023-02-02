export enum RouteName {
  // root
  ROOT = "/",
  ALL = "*",

  // connect
  CONNECT = "/connect",
  CONNECT_LOGIN = "/connect/login",
  CONNECT_SIGNUP = "/connect/signup",

  // account
  ACCOUNT_DASHBOARD = "/dashboard",

  // ERROR
  ERROR = "/error",
  ERROR_404 = "/error/404",
  ERROR_403 = "/error/403",
}

export const PROTECTED_ROUTES = [RouteName.ACCOUNT_DASHBOARD];

export const routeNameMap = (): string[] => Object.keys(RouteName);
