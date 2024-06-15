import * as Yup from "yup";
import { Formik } from "formik";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { updatePasswordUser } from "../config/firebase";
import { ContactlessOutlined } from "@mui/icons-material";
const UserConfigContraseña = () => {
  const onSubmit = async ({ password }) => {
    try {
      const update = await updatePasswordUser(email);
      console.log(update);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .trim()
      .min(6, "Mínimo 6 caracteres")
      .required("Contraseña requerida"),
  });

  return (
    <>
      <Formik
        initialValues={{ password: "password" }}
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
              type="password"
              placeholder="test@example.com"
              value={values.password}
              onChange={handleChange}
              name="password"
              onBlur={handleBlur}
              id="password"
              label="Ingrese password"
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
              Cambiar contraseña
            </LoadingButton>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default UserConfigContraseña;
