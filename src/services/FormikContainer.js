import { Formik } from 'formik'

const FormikContainer = ({handleSubmit, initialValues, validationSchema, children}) => {
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      { children }
    </Formik>
  )
}

export default FormikContainer