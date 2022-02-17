import axios from "axios";
// import Cookies from 'js-cookie';

const axiosFactory = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
};

export default axiosFactory;
