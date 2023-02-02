import { useEffect, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/AuthContext";
import Input from "../../components/ui/input/Input";
import { logger } from "../../utils/logger";
import { RouteName } from "../../utils/router";
import { toaster } from "../../common/toaster";

const LogIn = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const { signin } = useAuth();
  const navigate = useNavigate();

  const tryLogin: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const { email, password, remember } = data;
    try {
      await signin(email, password, remember);
      navigate(RouteName.ACCOUNT_DASHBOARD);
    } catch (error: any) {
      toaster.error(t(`common.form-errors.${error.code}`), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // useEffect(() => {
  //   logger.log(RouteName.CONNECT_LOGIN)
  // }, []);

  return (
    <div className="signup">
      <h1 className="title has-text-align-center is-full">
        {t("oh-damn.name")}
      </h1>
      <form onSubmit={handleSubmit(tryLogin)}>
        <h1 className="title">{t("pages.connect.login.title")}</h1>
        <label htmlFor="email">
          {t("pages.connect.login.email.label")}
          <Input
            name="email"
            control={control}
            placeholder={t("pages.connect.login.email.placeholder").toString()}
            rules={{
              required: true,
            }}
          />
        </label>
        <label htmlFor="password">
          {t("pages.connect.login.password.label")}
          <Input
            name="password"
            control={control}
            placeholder={t(
              "pages.connect.signup.password.placeholder"
            ).toString()}
            rules={{
              required: true,
            }}
          />
        </label>
        <label htmlFor="remember">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => <input type="checkbox" {...field} />}
          />
          {t("pages.connect.remember-me")}
        </label>

        <input
          type="submit"
          value={t("pages.connect.login.submit").toString()}
        />
        <Link to={RouteName.CONNECT_SIGNUP}>
          {t("pages.connect.login.dont-have-an-account")}
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
