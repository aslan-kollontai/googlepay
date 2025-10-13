import NavBar from "./NavBar";
import Footer from "./Footer";
import Divider from "./Divider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Divider />
      <main>{children}</main>
      <Divider />
      <Footer />
    </>
  );
}

export default Layout;
