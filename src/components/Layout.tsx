import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

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
