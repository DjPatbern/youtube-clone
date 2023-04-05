import axios from "axios";
import { API_KEY, baseURLLink } from "./api-links";

const request = axios.create({
  baseURL: baseURLLink,
  params: {
    key: API_KEY,
  },
});

export default request;

// AIzaSyBQAT7iFkHvxWD_eEsMx5Ido94DaLlSN9w
