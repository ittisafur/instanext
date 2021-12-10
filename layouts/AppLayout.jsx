import React from "react";
import AppNavbar from "../components/AppNavbar";

const AppLayout = ({ children }) => {
  return (
    <section>
      <AppNavbar />
      <section className="py-10">{children}</section>
    </section>
  );
};

export default AppLayout;
