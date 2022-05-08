import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { loginInitialValues } from "../../../constants/initialValues";
import { loginValidationSchema } from "../../../constants/validationSchemas";
import { AccountState } from "../../../context/typescript/users.enums";
import { AccountFormProps, UsersStore } from "../../../context/typescript/users.types";
import { useUserStore } from "../../../context/UserContext";
import FormikContainer from "../../../services/FormikContainer";

const LoginForm = () => {
  const userStore: UsersStore = useUserStore();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (values: AccountFormProps) => {
    const success = await userStore.userSignin(values);
    if (!success) {
      setServerError("Please check your email and password and try again.");
      return;
    }
    userStore.updateLoginState(AccountState.None);
  };

  return (
    <div className="form-container">
      <div className="login-form-heading">Login</div>
      <FormikContainer
        handleSubmit={(values: AccountFormProps) => handleSubmit(values)}
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
          values: AccountFormProps;
          errors: AccountFormProps;
          touched: AccountFormProps;
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
              onClick={() => userStore.updateLoginState(AccountState.None)}
            />
            <FontAwesomeIcon
              className="login-steps-back"
              icon={faChevronLeft}
              onClick={() => userStore.updateLoginState(AccountState.Choose)}
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
