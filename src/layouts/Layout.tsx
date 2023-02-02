import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../common/AuthContext";
import { ThemeContext } from "../common/ThemeContext";
import ToasterContainer from "../common/toaster";
import { RouteName } from "../utils/router";

const Layout = () => {
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

  useEffect(() => {
    //     const user = getUser();
    //     if (!user) return;
    //     setIsLogin(true);
    //     handleDeviceAndTheme();
    //     window.addEventListener("resize", handleDeviceAndTheme);
  }, [isLogin]);

  return (
    <div id="od" className={`is-${device} is-${mode}-mode`}>
      <ToasterContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
