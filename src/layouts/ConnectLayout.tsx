import { t } from "i18next";
import { Outlet } from "react-router-dom";

const ConnectLayout = () => {
  return (
    <div className="signup">
      <h1 className="title has-text-align-center is-full">
        {t("oh-damn.name")}
      </h1>
      <Outlet />
    </div>
  );
};

export default ConnectLayout;
