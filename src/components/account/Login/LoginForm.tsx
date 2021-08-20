import { useHistory } from "react-router-dom";
import { loginInitialValues } from "../../../constants/initialValues";
import { loginValidationSchema } from "../../../constants/validationSchemas";
import { IUserContext, useUserData } from "../../../context/UserContext";
import { IFormProperties } from "../../../pages/account/interfaces";
import FormikContainer from "../../../services/FormikContainer";

const LoginForm = () => {
  const userStore: IUserContext = useUserData();
  const history = useHistory();

  const setAuthTokenCookie = (token: string) => {
    userStore.setCookie("token", token, { path: "/" });
  };

  const handleSubmit = async (values: IFormProperties) => {
    const token = await userStore.userSignin(values);
    if (token) {
      setAuthTokenCookie(token);
      history.push("/");
    }
  };

  return (
    <div className="login-form-container">
      <div>Welcome Back!</div>
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
            <input
              className=""
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <input
              className=""
              type="current-password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
            {!!errors &&
              touched.password &&
              Object.values(errors).map((error) => (
                <div key={error}>{error}</div>
              ))}
            <div className="">
              <button
                type="submit"
                disabled={(!values.email || !values.password) === true}
              />
            </div>
          </form>
        )}
      </FormikContainer>
    </div>
  );
};

export default LoginForm;
