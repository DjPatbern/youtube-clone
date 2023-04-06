import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default request;

// AIzaSyBQAT7iFkHvxWD_eEsMx5Ido94DaLlSN9w
