import axios from 'axios';

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default httpClient;
