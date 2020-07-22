import { BASE_URL } from './';
import axios from 'axios';

const get = (url) => {
  return axios.get(BASE_URL + url).then((response) => {
    return response.data;
  });
};

export const getTalk = (id) => {
  return get('/api/talks/' + id);
};

export const getTalks = () => {
  return get('/api/talks');
};

export const getSpeaker = (id) => {
  return get('/api/speakers/' + id);
};
