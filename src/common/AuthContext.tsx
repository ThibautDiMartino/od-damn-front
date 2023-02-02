import { FirebaseError } from "firebase/app";
import { getAuth, User, UserCredential } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { CookiesKeys } from "../models/cookie";
import { Cookie } from "universal-cookie";
import { LocalStorageKeys } from "../models/localStorage";
import { logger } from "../utils/logger";
import { RouteName } from "../utils/router";
import { FirebaseAuth } from "./FirebaseAuth";
import { UserData } from "../models/user";

interface AuthContextType {
  getUser: () => User;
  signup: (
    email: string,
    pasword: string,
    remember: boolean
  ) => Promise<string>;
  signin: (
    email: string,
    pasword: string,
    remember: boolean
  ) => Promise<string>;
  signout: () => void;
  isLoggedIn: () => Promise<boolean>;
  cookies: any;
}

let AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [cookies, setCookies, removeCookies] = useCookies([
    CookiesKeys.LETELAOUPA,
    CookiesKeys.OD_USER_ID,
  ]);
  const firebaseAuth = new FirebaseAuth(getAuth());

  const signup = async (
    email: string,
    password: string,
    remember: boolean
  ): Promise<string> => {
    const user: User = await firebaseAuth
      .signup(email, password)
      .catch((error: FirebaseError) => {
        logger.error(error);
        throw error;
      });
    if (remember) {
      setCookies(CookiesKeys.LETELAOUPA, true);
    }
    localStorage.setItem(
      LocalStorageKeys.FIREBASE_AUTH_USER_CREDENTIALS,
      JSON.stringify(user)
    );
    setCookies(CookiesKeys.OD_USER_ID, user.uid);
    logger.log("User created with id: ", user.uid);
    return user.uid;
  };

  const signin = async (
    email: string,
    password: string,
    remember: boolean
  ): Promise<string> => {
    const user: User = await firebaseAuth
      .signin(email, password)
      .catch((error: FirebaseError) => {
        logger.error(error);
        throw error;
      });
    if (remember) {
      setCookies(CookiesKeys.LETELAOUPA, true);
    }
    logger.log(user);
    setCookies(CookiesKeys.LETELAOUPA, true);
    localStorage.setItem(
      LocalStorageKeys.FIREBASE_AUTH_USER_CREDENTIALS,
      JSON.stringify(user)
    );
    setCookies(CookiesKeys.OD_USER_ID, user.uid);
    return user.uid;
  };

  const signout = () => {};

  const isLoggedIn = async (): Promise<boolean> => {
    const token = await firebaseAuth
      .getAuthToken()
      .catch((error: FirebaseError) => {
        logger.error(error);
        throw error;
      });
    return !!token;
  };

  const getUser = (): User => {
    return firebaseAuth.getUser();
  };

  const value = { getUser, signup, signin, signout, isLoggedIn, cookies };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { cookies } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const isLogin = !!cookies[CookiesKeys.OD_USER_ID];
  //   logger.log("Require auth: isLogin = ", isLogin);
  //   if (!isLogin) {
  //     navigate(RouteName.CONNECT);
  //     return;
  //   }
  //    else if (
  //     [RouteName.ALL, "/", RouteName.ROOT].includes(
  //       location.pathname as RouteName
  //     )
  //   ) {
  //     navigate(RouteName.ACCOUNT_DASHBOARD);
  //   }
  // }, []);

  return children;
};

export default AuthProvider;
