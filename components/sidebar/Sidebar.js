"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  BookOpenIcon,
  InboxStackIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { removeAuthenticationTokens } from "@/utils/authUtils";
import LogOutDialog from "../dialogs/LogOutDialog";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "@/redux/slices/authSlice";

export function SidebarWithCta() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
  const [logOutDialogOpen, setLogOutDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleOpenDialog = () => {
    setLogOutDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setLogOutDialogOpen(false);
  };

  const handleLogout = () => {
    removeAuthenticationTokens();
    dispatch(logoutUserAction());
    router.push("/");
  };

  const handleLogOutDialog = () => {
    handleLogout();
    handleCloseDialog();
  };

  const handleNavigation = (point) => {
    router.push(`/dashboard/${point}`);
  };

  return (
    <>
      <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex gap-1 items-center">
          <BookmarkSquareIcon
            className="h-12 w-12 hover:cursor-pointer"
            onClick={() => handleNavigation("")}
          />
          <Typography variant="h5" color="blue-gray">
            Admin Dashboard
          </Typography>
        </div>
        <hr className="my-2 border-blue-gray-50" />
        <List>
          <ListItem onClick={() => handleNavigation("analytics")}>
            <ListItemPrefix>
              <ArrowTrendingUpIcon className="h-5 w-5" />
            </ListItemPrefix>
            Analytics
          </ListItem>
          <ListItem onClick={() => handleNavigation("books")}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5" />
            </ListItemPrefix>
            Books
          </ListItem>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <InboxStackIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Orders
                </Typography>
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem onClick={() => handleNavigation("orders")}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Individual Orders
                </ListItem>
                <ListItem onClick={() => handleNavigation("wholesale-orders")}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Wholesale Orders
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem onClick={() => handleNavigation("admin-management")}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admin Management
          </ListItem>
          <ListItem onClick={() => handleNavigation("settings")}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={handleOpenDialog}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
        <Alert
          open={openAlert}
          className="mt-auto"
          onClose={() => setOpenAlert(false)}
        >
          <BookmarkSquareIcon className="mb-4 h-12 w-12" />
          <Typography variant="h6" className="mb-1">
            IT Gura Admin Dashboard
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Welcome to IT Gura Admin Dashboard. Manage your books and orders
            seamlessly with IT Gura's intuitive dashboard.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
          </div>
        </Alert>
      </Card>
      <LogOutDialog
        open={logOutDialogOpen}
        handleClose={handleCloseDialog}
        handleLogOut={handleLogOutDialog}
      />
    </>
  );
}
