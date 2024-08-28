import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Root;
