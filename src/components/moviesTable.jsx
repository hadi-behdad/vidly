import Table from "./common/table";
import Like from "./common/like";
const MoviesTable = (props) => {
  const { movies, sortColumn, onLike, onDelete, onSort } = props;

  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      path: "",
      label: "",
      content: (movie) => (
        <Like
          onLike={() => onLike(movie._id)}
          liked={movie.liked}
          id={movie._id}
        ></Like>
      ),
    },
    {
      path: "",
      label: "",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
    ></Table>
  );
};

export default MoviesTable;
