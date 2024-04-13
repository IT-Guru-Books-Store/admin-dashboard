import axios from "../utils/axiosConfig";


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("/user/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`/user/getUserById/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
