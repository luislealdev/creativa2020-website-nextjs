import { Routes, Route } from "react-router-dom";
import { Navbar, TopBar } from "../components";
import { Home } from "../pages";
import { FooterSection } from "../sections";
import { BlogRoutes } from "./BlogRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  // const { showingMobileNavbar } = useSelector((state) => state.ui);
  // if (showingMobileNavbar) return <h1>Hey</h1>;

  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<BlogRoutes />} />
      </Routes>
      <FooterSection />
    </>
  );
};
