import axios from 'axios';
import qs from 'qs';

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
mainAxios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

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
  mainAxios.post('/signin', {
    username,
    password,
  });
