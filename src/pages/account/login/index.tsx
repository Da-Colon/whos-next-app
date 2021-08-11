import React, { FC } from "react";
import { loginInitialValues } from "../../../constants/initialValues";
import { loginValidationSchema } from "../../../constants/validationSchemas";
import FormikContainer from "../../../services/FormikContainer";
import Container, { EContainer } from "../../../components/layout/Container";
import LoginForm from "./LoginForm";
import { useUserData } from "../../../context/UserContext";
import { useHistory } from "react-router-dom";
import TextContainer, { ETextContainer } from "../../../components/layout/TextContainer";
import { IFormProperties } from "../interfaces";

const LoginPage: FC<{ cookieHandler: any }> = ({ cookieHandler }) => {
  const { userSignin } = useUserData();
  const history = useHistory();

  const handleSubmit = async (values: IFormProperties) => {
    const token = await userSignin(values);
    if (token) {
      cookieHandler(token);
      history.push("/");
    }
  };
  return (
    <Container variant={EContainer.margined} addClasses="items-center">
      <TextContainer
        variant={ETextContainer.xlarge}
        label="Welcome Back!"
        addClasses="absolute left-12"
      />
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
          <LoginForm
            values={values}
            touched={touched}
            errors={errors}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        )}
      </FormikContainer>
    </Container>
  );
};

export default LoginPage;
