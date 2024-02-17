import React from "react";
import MovieCard from "./Moviecart.js";

class MovieList extends React.Component {
  render() {
    const {
      movies,
      increaseStars,
      decreaseStars,
      toggleFavStatus,
      toggleCartItem,
    } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            addStars={increaseStars}
            key={index}
            decStars={decreaseStars}
            toggleFavStatus={toggleFavStatus}
            toggleCartItem={toggleCartItem}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
