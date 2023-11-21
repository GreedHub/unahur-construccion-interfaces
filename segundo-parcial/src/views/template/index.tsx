import { Outlet } from "react-router-dom";
import MobileNav from "../../components/nav-mobile";

export default function Template() {
  return (
    <>
      <Outlet />
      <MobileNav />
    </>
  );
}
