import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import "./connect.scss";
import {
  EMAIL_VALIDATION_REGEX,
  PASSWORD_VALIDATION_REGEX,
} from "../../utils/validation";
import { useAuth } from "../../common/AuthContext";
import { RouteName } from "../../utils/router";
import { Link } from "react-router-dom";
import Input from "../../components/ui/input/Input";
import "react-toastify/dist/ReactToastify.css";
import { toaster } from "../../common/toaster";
import { logger } from "../../utils/logger";
import { useTranslation } from "react-i18next";
import FormInput from "../../components/connect/form-input/FormInput";

const SignUp = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const { signup } = useAuth();

  const trySignup: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    const { email, password, remember } = data;
    try {
      await signup(email, password, remember);
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

  return (
    <div className="signup">
      <h1 className="title has-text-align-center is-full">
        {t("oh-damn.name")}
      </h1>
      <form onSubmit={handleSubmit(trySignup)}>
        <h1 className="title">{t("pages.connect.signup.title")}</h1>
        <FormInput
          type="email"
          label={t("pages.connect.signup.email.label").toString()}
          control={control}
          placeholder={t("pages.connect.signup.email.placeholder").toString()}
          rules={{
            required: true,
            pattern: {
              value: EMAIL_VALIDATION_REGEX,
              message: "Hint: first.last@example.test",
            },
          }}
        />
        <FormInput
          type="password"
          label={t("pages.connect.signup.password.label").toString()}
          control={control}
          placeholder={t(
            "pages.connect.signup.password.placeholder"
          ).toString()}
          rules={{
            required: true,
            pattern: {
              value: PASSWORD_VALIDATION_REGEX,
              message: "Need ISO 27001 specs",
            },
          }}
        />
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
          value={t("pages.connect.signup.submit").toString()}
        />
        <Link to={RouteName.CONNECT_LOGIN}>
          {t("pages.connect.signup.already-have-an-account")}
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
