const API_KEY = 'b155ee0fa93810739398bb8ba9675654';
const BASE_PATH = 'https://api.themoviedb.org/3';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    response => response.json(),
  );
}
