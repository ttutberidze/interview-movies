import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api'

export const getMovie = (id) => {
  return axios.get(`/films/${id}/?format=json`)
}
export const getStarship = (id) => {
  return axios.get(`/starships/${id}/?format=json`)
}
