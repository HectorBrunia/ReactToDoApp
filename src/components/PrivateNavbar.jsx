import { NavLink } from "react-router-dom";
const PrivateNavbar = ({ handleLogout }) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl flex flex-row  gap-12 mx-auto p-4">
        <button className="text-white" onClick={handleLogout}>
          LogOut
        </button>
      </nav>
    </>
  );
};
export default PrivateNavbar;
