import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("idToken");

const instance = axios.create({
  baseURL: "https://api-4ziv3qhbnq-uc.a.run.app",
  timeout: 6000,
  headers: { Authorization: `Bearer ${token}` },
});

export default instance;
