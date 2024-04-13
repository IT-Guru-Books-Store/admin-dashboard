"use client";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "../material_tailwind_components/MaterialTailwindComponents";

const LogOutDialog = ({ open = false, handleClose, handleLogOut }) => {
  return (
    <Dialog
      open={open}
      handler={handleLogOut}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Are you sure you want to log out?</DialogHeader>
      <DialogBody>
        Logging out will end your current session. You may need to log in again
        to access your account.
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleClose}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleLogOut}>
          <span>Log Out</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default LogOutDialog;
