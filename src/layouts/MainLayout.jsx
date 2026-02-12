import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-primary text-white font-lexend font-base relative">
      <Navbar />
      <main className="px-5 md:px-40 relative z-0">{children}</main>
      <Footer />
    </div>
  );
}
