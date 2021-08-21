import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { loginInitialValues } from "../../../constants/initialValues";
import { loginValidationSchema } from "../../../constants/validationSchemas";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import { IFormProperties } from "../../../pages/account/interfaces";
import FormikContainer from "../../../services/FormikContainer";

const LoginForm = () => {
  const userStore: IUserStore = useUserStore();
  const [serverError, setServerError] = useState<string | null>(null);

  const setAuthTokenCookie = (token: string) => {
    userStore.setCookie("token", token, { path: "/" });
  };

  const handleSubmit = async (values: IFormProperties) => {
    const token = await userStore.userSignin(values);
    if (!token) {
      setServerError("Please check your email and password and try again.");
      return;
    }
    setAuthTokenCookie(token);
    userStore.updateLoginState(EAccountState.None);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-heading">Login</div>
      <FormikContainer
        handleSubmit={(values: IFormProperties) => handleSubmit(values)}
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          touched,
        }: {
          values: IFormProperties;
          errors: IFormProperties;
          touched: IFormProperties;
          handleSubmit: () => void;
          handleChange: () => void;
        }) => (
          <form
            className="p-4 mt-16 flex flex-col gap-2 w-1/2"
            onSubmit={handleSubmit}
          >
            <FontAwesomeIcon
              className="login-steps-close"
              icon={faTimes}
              onClick={() => userStore.updateLoginState(EAccountState.None)}
            />
            <FontAwesomeIcon
              className="login-steps-back"
              icon={faChevronLeft}
              onClick={() => userStore.updateLoginState(EAccountState.Choose)}
            />
            {/* Break out into components */}
            {serverError && <div className="form-errors">{serverError}</div>}
            {!!errors &&
              touched.password &&
              Object.values(errors).map((error) => (
                <div className="form-errors" key={error}>
                  {serverError || error}
                </div>
              ))}
            <input
              className=""
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
              placeholder="example@example.com"
            />
            <input
              className=""
              type="current-password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              placeholder="**********"
            />

            <button
              type="submit"
              disabled={(!values.email || !values.password) === true}
            >
              Login
            </button>
          </form>
        )}
      </FormikContainer>
    </div>
  );
};

export default LoginForm;
