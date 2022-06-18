import axios from 'axios';

export const getUsers = async () => {
  return axios.get('http://localhost:3001/users');
}
export const insertUser = async (user) => {
  return axios.post('http://localhost:3001/users', user);
}
