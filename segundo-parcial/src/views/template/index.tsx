import { Outlet } from "react-router-dom";
import MobileNav from "../../components/nav-mobile";
import Header from "../../components/header";

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
      <MobileNav />
    </>
  );
}
