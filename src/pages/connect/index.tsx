import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/AuthContext";
import { CookiesKeys } from "../../models/cookie";
import { logger } from "../../utils/logger";
import { RouteName } from "../../utils/router";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Connect = () => {
  // const navigate = useNavigate();
  const { cookies } = useAuth();

  // useEffect(() => {
  //   logger.log(RouteName.CONNECT);
  //     if (cookies[CookiesKeys.LETELAOUPA]) {
  //       navigate(RouteName.CONNECT_LOGIN);
  //     } else {
  //       navigate(RouteName.CONNECT_SIGNUP);
  //     }
  // }, []);

  return (
    // <>
    <Routes>
      {/* <Route
        path="connect/"
        element={
          !!cookies[CookiesKeys.LETELAOUPA] ? (
            <Navigate to="/connect/login/" />
          ) : (
            <Navigate to={RouteName.CONNECT_SIGNUP} />
          )
        }
      />
      <Route path="/onnect/login" element={<LogIn />} />
      <Route path={RouteName.CONNECT_SIGNUP} element={<SignUp />} /> */}
    </Routes>
    // </>
  );
};

export default Connect;
