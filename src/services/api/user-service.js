import API from './api-service';

const baseUrl = 'users'

export const validateUser = (password) => {
  return API.post(`${baseUrl}/validate`, { password });
};