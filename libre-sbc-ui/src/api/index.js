import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.LIBRE_SBC_API_URL,
});
export default axiosInstance;
