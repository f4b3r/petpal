import axios from "axios";
import useKeycloakAuth from './hooks/useKeycloakAuth';
import { config } from "./Constants";

const webClient = axios.create({
  baseURL: config.url.API_BASE_URL,
});

webClient.interceptors.request.use(async (config) => {
  const { isAuthenticated, token, updateToken } = useKeycloakAuth();

  if (isAuthenticated) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve(config);
    };
    return updateToken(cb);
  }

  return config;
});

export default webClient;
