import { BASE_URL } from './';

const get = (url) => {
  return fetch(BASE_URL + url).then((response) => {
    return response.json();
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
