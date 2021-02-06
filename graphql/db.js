let movies = [
  {
    id: 0,
    name: 'Iron Man 1',
    score: 89,
  },
  {
    id: 1,
    name: 'Iron Man 2',
    score: 87,
  },
  {
    id: 2,
    name: 'Iron Man 3',
    score: 90,
  },
  {
    id: 3,
    name: 'Avengers 1',
    score: 92,
  },
  {
    id: 4,
    name: 'Avengers 2',
    score: 97,
  },
];

export const getMovies = () => movies;

export const getMovieById = (id) => movies.find((movie) => id === movie.id);

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const filteredMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};
