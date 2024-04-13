import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUserById } from "../services/userService";
import { loginUserAction } from "../redux/slices/authSlice";

export const addAuthenticationState = async (user) => {
  const dispatch = useDispatch();
  try {
    const data = await getUserById(user.uid);
    dispatch(loginUserAction(data));
  } catch (e) {
    console.error(e, "Error in fetching user");
  }
};

export const addAuthenticationTokens = (user, _tokenResponse, userRole) => {
  Cookies.set("userId", user.uid);
  Cookies.set("idToken", _tokenResponse.idToken);
  Cookies.set("refreshToken", _tokenResponse.refreshToken);
  Cookies.set("userRole", userRole);
};

export const clearAuthenticationState = () => {
  // Clear any local authentication state here
  // For example, if using React context or state management, clear the user state
  console.log("Clear the Local state");
};

export const removeAuthenticationTokens = () => {
  Cookies.remove("userId");
  Cookies.remove("idToken");
  Cookies.remove("refreshToken");
  Cookies.remove("userRole");
};

export const isAuthenticated = () => {
  return Cookies.get("userId") !== undefined;
};

export const getUserRole = () => {
  return Cookies.get("userRole");
};
