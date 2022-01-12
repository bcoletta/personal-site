import API from './api-service.js';

const baseURI = 'movies';

export const getMovies = () => {
  return API.get(baseURI).then(res => res);
};

export const addMovie = body => {
  return API.put(baseURI, body);
};

export const getReport = () => {
  return API.get(`${baseURI}/report`);
};