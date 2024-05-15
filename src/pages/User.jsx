import { useUserContext } from "../context/UserContext";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { updateUser, updateUserImg } from "../config/firebase";
import { useState } from "react";
const User = () => {
  const { user } = useUserContext();

  const [name, setName] = useState(user.displayName);

  const onSubmit = async ({ userName, userPhoto }) => {
    try {
      const update = await updateUser(userName, userPhoto);
      setName(user.displayName);
    } catch (error) {
      console.log(error);
    }
  };
  const validationSchema = Yup.object().shape({});

  return (
    <Box sx={{ mt: 8, maxWidth: 400, mx: "auto", textAlign: "center" }}>
      {user.photoURL ? (
        <img src={user.photoURL} alt="" />
      ) : (
        <Avatar sx={{ mx: "auto", bgcolor: "#444" }}>
          <LockOutlinedIcon />
        </Avatar>
      )}

      <Typography component="h1" variant="h5">
        {user.displayName ? <p>{name}</p> : <p>Unnamed user</p>}
      </Typography>

      <Formik
        initialValues={{ userName: "", userPhoto: "" }}
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
              placeholder={user.displayName}
              value={values.userName}
              onChange={handleChange}
              name="userName"
              onBlur={handleBlur}
              id="userName"
              label="Ingrese nombre de usuario"
              fullWidth
              sx={{ mb: 3 }}
              error={errors.userName && touched.userName}
              helperText={
                errors.userName && touched.userName && errors.userName
              }
            />

            <LoadingButton
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="contained"
              fullWidth
              sx={{ mb: 3 }}
            >
              Guardar cambios
            </LoadingButton>
          </Box>
        )}
      </Formik>
      <div>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => updateUserImg(e.target.files[0], user)}
        ></input>
      </div>
    </Box>
  );
};

export default User;
