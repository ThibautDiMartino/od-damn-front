import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/AuthContext";
import Header from "../../components/account/Header";
import { CookiesKeys } from "../../models/cookie";
import { logger } from "../../utils/logger";
import { RouteName } from "../../utils/router";
import Dashboard from "./Dashboard";
import "./account.scss";

const Account = () => {
  // const { cookies } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   logger.log(RouteName.ACCOUNT);
  //   const isLogin = cookies[CookiesKeys.OD_USER_ID];
  //   !isLogin
  //     ? navigate(RouteName.CONNECT)
  //     : navigate(RouteName.ACCOUNT_DASHBOARD);
  // }, []);

  return (
    <div className="account-layout">
      <Header />
      <Routes>
        <Route path={RouteName.ACCOUNT_DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Account;
