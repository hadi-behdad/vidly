import React, { useState } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import SideBar from "./common/sidebar";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

const Movies = (props) => {
  const allGenres = "All Genres";
  const [movies, setMovies] = useState(getMovies());

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState({ name: allGenres });

  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  let currentPageMovies = [];
  const genres = [{ name: allGenres }, ...getGenres()];
  const pageSize = 4;

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleDelete = (movie) => {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  };

  const handleLike = (id) => {
    const tempMovies = [...movies];
    const currentIndex = movies.findIndex((obj) => obj._id === id);
    tempMovies[currentIndex] = { ...movies[currentIndex] };
    tempMovies[currentIndex].liked = !tempMovies[currentIndex].liked;

    setMovies(tempMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  if ((currentPage - 1) * pageSize === movies.length)
    setCurrentPage(currentPage - 1);

  const filteredBasedOnGenre = [
    ...movies.filter((m) => {
      if (selectedGenre.name !== allGenres)
        return m.genre.name === selectedGenre.name;
      else return m.genre.name;
    }),
  ];

  const sortedMovies = [
    ..._.orderBy(filteredBasedOnGenre, sortColumn.path, sortColumn.order),
  ];

  currentPageMovies = _.slice(
    sortedMovies,
    (currentPage - 1) * pageSize,
    pageSize * currentPage
  );

  if (filteredBasedOnGenre.length === 0)
    return <p>There are no Movies in the database</p>;

  return (
    <div className="row">
      <div className="col-3">
        <SideBar
          items={genres}
          selectedItem={selectedGenre.name}
          onItemSelect={handleGenreSelect}
        ></SideBar>
      </div>
      <div className="col">
        <p>Showing {filteredBasedOnGenre.length} movies in the database</p>
        <MoviesTable
          movies={currentPageMovies}
          sortColumn={sortColumn}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
        ></MoviesTable>
        <Pagination
          pageSize={pageSize}
          itemsCount={filteredBasedOnGenre.length}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Movies;
