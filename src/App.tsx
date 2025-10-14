import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Divider from "./components/Divider";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Benefits />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
    </Layout>
  );
}

export default App;
