import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <BookingModal /> {/* modal only once */}
    </>
  );
}
