import { Outlet } from "react-router-dom/dist";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
