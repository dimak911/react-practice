export function getFilmsData(arr) {
  return arr.map(({ id, title, vote_average: votes, poster_path: poster }) => ({
    id,
    title,
    votes,
    poster: 'https://image.tmdb.org/t/p/w500' + poster,
    watched: false,
  }));
}
