import { logOut } from "../config/firebase";

const Home = () => {
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};

export default Home;
