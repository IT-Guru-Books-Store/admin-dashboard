import React from "react";
import { NavbarSimple } from "../../components/navbar/Navbar";
import { SidebarWithCta } from "../../components/sidebar/Sidebar";
import BodyContainer from "@/components/containers/BodyContainer";

const layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <SidebarWithCta />
      <div className="flex flex-col w-full">
        <NavbarSimple />
        <BodyContainer>{children}</BodyContainer>
      </div>
    </div>
  );
};

export default layout;
