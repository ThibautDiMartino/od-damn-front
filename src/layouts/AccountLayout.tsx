import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/account/Header";
import Dashboard from "../pages/account/Dashboard";

const AccountLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="account-layout">
      <Header />
      {children}
      {/* <Outlet /> */}
      {/* <Navigate to="/dashboard" /> */}
    </div>
  );
};

export default AccountLayout;
