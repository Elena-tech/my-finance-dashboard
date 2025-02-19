import React from "react";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";
import "../../styles/templates/MainLayout.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
