import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children, profile }) => {
  return (
    <div>
      <Header profile={profile} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
