"use client";
import { USER_ROLES } from "@/constants/constant";
import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const auth = useSelector((state) => state.auth);
  if (!auth.user) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }
  if (auth.user) {
    if (auth.user.role === USER_ROLES.SUPER_ADMIN) {
      return <div>You have access to the Admin management page</div>;
    }
    return <div>Unothroized access to admin management</div>;
  }
};

export default page;
