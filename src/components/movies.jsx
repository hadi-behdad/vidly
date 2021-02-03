import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

const Movies = (props) => {
  const [movies, setMovies] = useState(getMovies());
  const [mainMovies, setMainMovies] = useState([]);

  useEffect(() => {
    setMainMovies([...movies]);
  }, []);

  const handleClick = (movie) => {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    console.log(movies);
    console.log(mainMovies);
    setMovies(newMovies);
  };

  const handleLike = (id) => {
    // const likeValue = movies[id].liked === true ? false : true;
    const tempMovies = [...movies];
    tempMovies[id] = { ...movies[id] };
    tempMovies[id].liked = !tempMovies[id].liked;

    setMovies(tempMovies);
  };

  if (movies.length === 0) return <p>There are no Movies in the database</p>;

  return (
    <React.Fragment>
      <p>Showing {movies.length} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  onLike={() => handleLike(index)}
                  liked={movie.liked}
                  id={index}
                ></Like>
              </td>
              <td>
                <button
                  onClick={() => handleClick(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Movies;
