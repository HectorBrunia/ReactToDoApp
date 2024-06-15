import { useUserContext } from "../context/UserContext";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import { updateUser, updateUserImg } from "../config/firebase";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UserConfigContraseña from "../components/UserConfigContraseña";
import UserConfigEmail from "../components/UserConfigEmail";

const User = () => {
  const { user } = useUserContext();

  const [name, setName] = useState(user.displayName);

  useEffect(() => {
    setName(user.displayName);
  }, [user]);

  const onSubmit = async ({ userName }) => {
    try {
      const update = await updateUser(userName);
      setImg(user.photoURL);
      setName(user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .min(6, "Mínimo 6 caracteres")
      .required("Nombre de usuario requerido"),
  });

  return (
    <div className="flex-row flex text-center m-auto mt-8 mx-36">
      <div className="flex-col flex m-auto">
        <div className="flex flex-row m-auto">
          {user.photoURL ? (
            <img
              className="m-auto h-60 w-60 rounded-full border-2 border-gray-600 shadow-xl"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <Avatar sx={{ mx: "auto", bgcolor: "#444" }}>
              <LockOutlinedIcon />
            </Avatar>
          )}

          <Typography sx={{ textAlign: "left", ml: "10px", mt: "50px" }}>
            <p className="text-gray-500 text-sm">nombre de usuario</p>
            {user.displayName ? (
              <p className="text-xs">{name}</p>
            ) : (
              <p className="text-xs">Unnamed user</p>
            )}
            <p className="text-gray-500 text-sm">correo electronico</p>
            <p className="text-xs">{user.email}</p>
          </Typography>
        </div>

        <label className="mt-4 border-t-2" form="image">
          Cambiar imagen de perfil
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            updateUserImg(e.target.files[0], user);
          }}
        ></input>
        <Formik
          initialValues={{ userName: name }}
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
                label="Nombre de usuario"
                fullWidth
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
                sx={{ mb: 1 }}
              >
                Cambiar nombre e imagen
              </LoadingButton>
            </Box>
          )}
        </Formik>
      </div>

      <div className="flex-col flex m-auto mt-8 ">
        <UserConfigEmail email={user.email} />
        <UserConfigContraseña></UserConfigContraseña>
      </div>
    </div>
  );
};

export default User;
