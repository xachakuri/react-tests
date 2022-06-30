import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';

const mainAxios = axios.create({
  baseURL: 'https://snp.drankov.ru/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

mainAxios.defaults.paramsSerializer = function(params) {
  return qs.stringify(params, { indices: false }); // param=value1&param=value2
};

mainAxios.interceptors.response.use(
  response => response,
  error => {
    toast.error(error.message);

    return Promise.reject(error);
  }
);

export const registerUser = ({ username, password, isAdmin }) =>
  mainAxios
    .post('/signup', {
      username,
      password,
      password_confirmation: password,
      is_admin: isAdmin,
    })
    .then(({ data }) => data);

export const loginUser = ({ username, password }) =>
  mainAxios
    .post('/signin', {
      username,
      password,
    })
    .then(({ data }) => data);

export const logoutUser = () => mainAxios.delete('/logout');

export const currentSession = () =>
  mainAxios.get('/users/current').then(({ response }) => response);
