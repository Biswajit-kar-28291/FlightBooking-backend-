import { Outlet } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";

export default function LoginLayout() {
  return (
    <>
      <LoginNavbar />
      <Outlet />
    </>
  );
}
