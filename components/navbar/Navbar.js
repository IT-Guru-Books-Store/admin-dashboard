"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Typography,
} from "../material_tailwind_components/MaterialTailwindComponents";
import { getUserById } from "@/services/userService";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { loginUserAction } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

export function NavbarSimple() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userId = Cookies.get("userId");

  const getUserDetails = async () => {
    try {
      const data = await getUserById(userId);
      dispatch(loginUserAction(data));
    } catch (error) {
      console.error("Error ocurred in fetching user info: ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, [userId]);

  if (!auth.user) {
    return (
      <div className="flex items-center px-6 py-3 shadow-md rounded-lg m-2 justify-end">
        <Spinner />
      </div>
    );
  }

  if (auth.user) {
    return (
      <div className="flex items-center px-6 py-3 shadow-md rounded-lg m-2 justify-end">
        <div className="flex items-center gap-4  ">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />

          <div>
            <Typography variant="h6" color="black">
              {auth.user.email}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {auth.user.role}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
