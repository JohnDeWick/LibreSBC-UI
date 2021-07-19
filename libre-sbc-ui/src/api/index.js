import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_LIBRE_SBC_API_URL,
});
export default axiosInstance;
