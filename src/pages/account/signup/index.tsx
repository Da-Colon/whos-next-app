import React from "react";
import { useHistory } from "react-router-dom";
import { signupInitialValues } from "../../../constants/initialValues";
import { signupValidationSchema } from "../../../constants/validationSchemas";
import { useUserData } from "../../../context/UserContext";
import FormikContainer from "../../../services/FormikContainer";
import Container, { EContainer } from "../../../components/layout/Container";
import TextContainer, { ETextContainer } from "../../../components/layout/TextContainer";
import { IFormProperties } from "../interfaces";
import SignupForm from "./SignupForm";

const SignupPage = () => {
  const { userSignup } = useUserData();
  const history = useHistory();
  const handleSubmit = async (values: IFormProperties) => {
    const success = await userSignup(values);
    if (success) {
      history.push("/login");
    }
  };
  return (
    <Container variant={EContainer.margined} addClasses="items-center">
      <TextContainer
        variant={ETextContainer.xlarge}
        label="Sign up to get started!"
        addClasses="absolute left-12"
      />
      <FormikContainer
        handleSubmit={(values: IFormProperties) => handleSubmit(values)}
        initialValues={signupInitialValues}
        validationSchema={signupValidationSchema}
      >
        {({ values, errors, handleSubmit, touched, handleChange }: {
          values: IFormProperties;
          errors: IFormProperties;
          touched: IFormProperties;
          handleSubmit: () => void;
          handleChange: () => void;
        }) => (
          <SignupForm
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

export default SignupPage;
