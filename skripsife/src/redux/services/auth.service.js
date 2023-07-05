import axios from 'axios';

const API_URL = 'http://localhost:3000/api/mahasiswa/';
const register = (name, nim, password) => {
  return axios
  // eslint-disable-next-line prefer-template
    .post(API_URL + 'register', {
      name, nim, password,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

const login = (nim, password) => {
  return axios
    // eslint-disable-next-line prefer-template
    .post(API_URL + 'login', {
      nim, password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('token');
};

export default {
  register,
  login,
  logout,
};