import { updateEmailuser } from "../config/firebase";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
const UserConfigEmail = ({ email }) => {
  console.log(email);
  const onSubmit = async ({ email }) => {
    try {
      const updatemail = await updateEmailuser(email);
      console.log(email);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email no válido").required("Email requerido"),
  });
  return (
    <>
      <Formik
        initialValues={{ email: email }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
          handleBlur,
        }) => (
          <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
            <TextField
              type="text"
              placeholder="test@example.com"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
              id="email"
              label="Ingrese email"
              fullWidth
              sx={{ mb: 3 }}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <LoadingButton
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="contained"
              fullWidth
              sx={{ mb: 3 }}
            >
              Cambiar Email
            </LoadingButton>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default UserConfigEmail;
