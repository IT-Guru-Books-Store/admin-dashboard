import analyticsImg from "../resources/images/analytics-pupil-img.png";
import booksImg from "../resources/images/books-img.png";
import ordersImg from "../resources/images/orders-img.png";
import adminManagementImg from "../resources/images/admin-img.png";

export const FEATURES = [
  {
    key: 1,
    title: "Analytics",
    img: analyticsImg,
    description:
      "Track the performance of online bookstore with detailed analytics and insights.",
    link: "analytics",
  },
  {
    key: 2,
    title: "Books",
    img: booksImg,
    description: "Efficiently manage all the books in your bookstore.",
    link: "books",
  },
  {
    key: 3,
    title: "Orders",
    img: ordersImg,
    description:
      "Manage all orders seamlessly, including wholesale orders and individual orders.",
    link: "orders",
  },
  {
    key: 4,
    title: "Admin Management",
    img: adminManagementImg,
    description: "Control and manage admin accounts for the admin dashboard. ",
    link: "admin-management",
  },
];

export const USER_STATES = {
  NOT_LOGGED_IN: "not_logged_in",
  LOGGED_IN: "logged_in",
};

export const USER_ROLES = {
  ADMIN: "admin",
  SUPER_ADMIN: "superadmin",
};
