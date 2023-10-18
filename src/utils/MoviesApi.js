import { moviesUrl } from "./constans";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getMovies() {
  return fetch(moviesUrl).then(checkResponse);
}
