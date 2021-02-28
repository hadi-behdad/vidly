const MovieForm = (props) => {
  const { match, history } = props;
  return (
    <div>
      <h3>Movie Form :{match.params.id}</h3>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;
