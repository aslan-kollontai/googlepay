import { Outlet } from "react-router";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

function Layout() {
  return (
    <>
      <NavBar />
      <Divider />
      <main>
        <Outlet />
      </main>
      <Divider />
      <Footer />
    </>
  );
}

export default Layout;
