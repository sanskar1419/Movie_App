import React from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import movies from "./movieData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  increaseStars = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].stars < 5) {
      movies[index].stars += 0.5;
      this.setState({
        movies: movies,
      });
    }
  };

  decreaseStars = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].stars > 0) {
      movies[index].stars -= 0.5;
      this.setState({
        movies: movies,
      });
    }
  };

  toggleFavStatus = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].favourite = !movies[index].favourite;
    this.setState({
      movies: movies,
    });
  };

  toggleCartItem = (movie) => {
    let { movies, cartCount } = this.state;
    const index = movies.indexOf(movie);
    movies[index].cart = !movies[index].cart;
    if (movies[index].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          increaseStars={this.increaseStars}
          decreaseStars={this.decreaseStars}
          toggleFavStatus={this.toggleFavStatus}
          toggleCartItem={this.toggleCartItem}
        />
      </>
    );
  }
}

export default App;
