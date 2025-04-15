import axios from 'axios';

const API_URL = import.meta.env.VITE_API_ENDPOINT || '';

/** common config */
axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosRequest = axios.create({
  baseURL: API_URL,
});

/** Add request interceptor */
axiosRequest.interceptors.request.use(
  async (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    return config;
  },
  (err) => {
    console.log(err);
    Promise.reject(err);
  },
);

export { axiosRequest };
