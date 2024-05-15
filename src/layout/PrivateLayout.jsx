import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { logOut } from "../config/firebase";
import PrivateNavbar from "../components/PrivateNavbar";
const Private = () => {
  const { user } = useUserContext();
  const handleLogout = async () => {
    await logOut();
  };
  return user ? (
    <>
      <PrivateNavbar handleLogout={handleLogout} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Private;
