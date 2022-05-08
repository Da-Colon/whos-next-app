import { useState } from "react";
import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserStore } from '../../../context/UserContext'
import FormikContainer from '../../../services/FormikContainer'
import { signupInitialValues } from "../../../constants/initialValues";
import { signupValidationSchema } from "../../../constants/validationSchemas";
import './styles.scss'
import { AccountFormProps, UsersStore } from "../../../context/typescript/users.types";
import { AccountState } from "../../../context/typescript/users.enums";

const SignupForm = () => {
  const userStore: UsersStore = useUserStore();
  const [serverError, setServerError] = useState<string | null>(null);

  const setAuthTokenCookie = (token: string) => {
    userStore.setCookie("token", token, { path: "/" });
  };

  const handleSubmit = async (values: AccountFormProps) => {
    const user = await userStore.userSignup(values);
    if (!user.token) {
      setServerError("Please check your email and password and try again.");
      return;
    }
    setAuthTokenCookie(user.token);
    userStore.updateSignupState(AccountState.None);
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-heading">Sign up</div>
      <FormikContainer
        handleSubmit={(values: AccountFormProps) => handleSubmit(values)}
        initialValues={signupInitialValues}
        validationSchema={signupValidationSchema}
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
              className="signup-steps-close"
              icon={faTimes}
              onClick={() => userStore.updateSignupState(AccountState.None)}
            />
            <FontAwesomeIcon
              className="signup-steps-back"
              icon={faChevronLeft}
              onClick={() => userStore.updateSignupState(AccountState.Choose)}
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
              Signup
            </button>
          </form>
        )}
      </FormikContainer>
    </div>
  );
};

export default SignupForm;
