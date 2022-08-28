import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = page => {
  return axios('trending/movie/day', {
    params: {
      api_key: '6f3a72a470b06bab99f8d69f54b4e2d3',
      page,
    },
  });
};
