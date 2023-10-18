export const baseUrl = "https://api.movie.kolotilina.nomoredomainsicu.ru";

export const EmailRegEx = "^\\S+@\\S+\\.\\S+$";

export function MOVIE_URL(movie) {
  return `https://api.nomoreparties.co${movie.image.url}`;
}

export const moviesUrl = "https://api.nomoreparties.co/beatfilm-movies";

export const SHORT_MOVIE_DURATION = 40;

export const BIG_SCREEN = 1280;
export const MEDIUM_SCREEN = 990;
export const SMALL_SCREEN = 620;
export const EXTRA_SMALL_SCREEN = 320;
export const QUANTITY_CARDS_BIG_SCREEN = 16;
export const QUANTITY_CARDS_MEDIUM_SCREEN = 12;
export const QUANTITY_CARDS_SMALL_SCREEN = 8;
export const QUANTITY_CARDS_EXTRA_SMALL_SCREEN = 5;

export const ADD_CARDS_BIG_SCREEN = 4;
export const ADD_CARDS_MEDIUM_SCREEN = 3;
export const ADD_CARDS_SMALL_SCREEN = 2;
