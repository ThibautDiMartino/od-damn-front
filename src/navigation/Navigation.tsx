import { useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  HashRouter as Router,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { RequireAuth, useAuth } from "../common/AuthContext";
import { RouteName, routeNameMap } from "../utils/router";
import Connect from "../pages/connect";
import Error from "../pages/error";
import Account from "../pages/account";
import ToasterContainer from "../common/toaster";
import { ThemeContext } from "../common/ThemeContext";
// import ThemeRoutes from "../components/common/theme-Routes/ThemeRoutes";
import { logger } from "../utils/logger";
import ModalRoot from "../components/common/ui/ModalRoot";
import Dashboard from "../pages/account/Dashboard";
import Layout from "../layouts/Layout";

const Navigation = () => {
  const [device, setDevice] = useState<string>();
  const [isLogin, setIsLogin] = useState(true);
  const { getUser } = useAuth();
  const { mode } = useContext(ThemeContext);
  // const location = useNavigation();
  // const navigate = useNavigate();

  const handleDeviceAndTheme = async () => {
    const size = window.innerWidth;

    if (size < 769) setDevice("mobile");
    else setDevice("desktop");
  };

  // useEffect(() => {
  //   const user = getUser();
  //   if (!user) return;
  //   setIsLogin(true);
  //   handleDeviceAndTheme();
  //   window.addEventListener("resize", handleDeviceAndTheme);
  // }, []);

  return (
    <>
      {/* // <div id="od" className={`is-${device} is-${mode}-mode`}>
    //   <ToasterContainer />
    //   <ModalRoot />
    //   <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={() => {
              isLogin ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/connect" />
              );
            }}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/connect" element={<Connect />} />
          </Route>
        </Routes>
        {/* <Routes>
          {[RouteName.ALL, RouteName.ROOT, `${RouteName.ACCOUNT}*`].map(
            (path, idx) => (
              <Route
                path={path}
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
                key={idx}
              />
            )
          )}
          <Route path={`${RouteName.CONNECT}`} element={<Connect />} />
          <Route path="*" element={<Error code={404} />} />
        </Routes> */}
      </Router>
      {/* // </div> */}
    </>
  );
};

export default Navigation;
