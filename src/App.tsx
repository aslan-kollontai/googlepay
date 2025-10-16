import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/Layout";
import { Route, Routes } from "react-router";
import Home from "@/routes/home";
import About from "@/routes/about";
import Contact from "@/routes/contact";
import Services from "@/routes/services";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
