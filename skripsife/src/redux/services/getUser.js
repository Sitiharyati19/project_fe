import axios from 'axios';

const token = localStorage.getItem('token');

export default function getUser() {
  return axios
    .get(`https://localhost:3000/api/mahasiswa/who-am-i`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}