import axios from 'axios';
import { Env } from 'scr/modules';

const baseURL = Env.API_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

export default request;
