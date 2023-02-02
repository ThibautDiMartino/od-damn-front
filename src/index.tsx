import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import Navigation from "./navigation/Navigation";
import AuthProvider from "./common/AuthContext";
// import { getAnalytics } from "firebase/analytics";

import "./utils/i18n";
import ThemeProvider from "./common/ThemeContext";
import ModalProvider from "./common/ModalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connect from "./pages/connect";
import Account from "./pages/account";
import path from "path";
import LogIn from "./pages/connect/LogIn";
import SignUp from "./pages/connect/SignUp";
import { RouteName } from "./utils/router";
import Dashboard from "./pages/account/Dashboard";
import Layout from "./layouts/Layout";
import AccountLayout from "./layouts/AccountLayout";
import ConnectLayout from "./layouts/ConnectLayout";

const firebaseConfig = {
  apiKey: "AIzaSyBeVmZVZ4oJt-THZ9DqGRIUnAl-3kZPImo",
  authDomain: "stackoverflow-e56cf.firebaseapp.com",
  projectId: "stackoverflow-e56cf",
  storageBucket: "stackoverflow-e56cf.appspot.com",
  messagingSenderId: "521198224428",
  appId: "1:521198224428:web:9df719886a35ed2977bd89",
  measurementId: "G-2G2PFQRX7V",
};

// const router = createBrowserRouter([
//   {
//     path: RouteName.ROOT,
//     element: <Layout />,
//     children: [
//       {
//         path: RouteName.ACCOUNT_DASHBOARD,
//         element: <AccountLayout />,
//       },
//       {
//         path: RouteName.CONNECT,
//         element: <ConnectLayout />,
//         children: [
//           {
//             path: RouteName.CONNECT_LOGIN,
//             element: <LogIn />,
//           },
//           {
//             path: RouteName.CONNECT_SIGNUP,
//             element: <SignUp />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          {/* <RouterProvider router={router} /> */}
          <Navigation />
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
