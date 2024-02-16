import React from "react";
import MovieCard from "./Moviecart.js";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          poster_url:
            "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
          title: "Avenger Endgame",
          plot: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios'grand conclusion to twenty-two films, 'Avengers: Endgame.'",
          price: 199,
          rating: 8.9,
          stars: 0,
          favourite: false,
          cart: false,
        },
        {
          poster_url:
            "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
          title: "The Dark Knight",
          plot: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins (2005) and the second installment in The Dark Knight Trilogy. ",
          price: 499,
          rating: 7.4,
          stars: 0,
          favourite: false,
          cart: false,
        },
        {
          poster_url:
            "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
          title: "The Matrix",
          plot: "At an abandoned hotel, a police squad corners Trinity, who overpowers them with superhuman abilities. She flees, pursued by the police and a group of suited Agents capable of similar superhuman feats. She answers a ringing public telephone and vanishes. ",
          price: 399,
          rating: 8.4,
          stars: 0,
          favourite: false,
          cart: false,
        },
        {
          poster_url:
            "https://upload.wikimedia.org/wikipedia/en/2/21/Pirates_of_the_Caribbean%2C_Dead_Men_Tell_No_Tales.jpg",
          title: "Pirates of the Caribbean: Dead Men Tell No Tales",
          plot: "Thirteen years after the battle of Calypso's maelstrom,[a] a twelve-year-old Henry Turner boards the Flying Dutchman and informs his father, Will, that the curse which binds Will to the Dutchman and decade can be broken by the Trident of Poseidon.",
          price: 399,
          rating: 8.4,
          stars: 0,
          favourite: false,
          cart: false,
        },
      ],
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
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].cart = !movies[index].cart;
    this.setState({
      movies: movies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            addStars={this.increaseStars}
            key={index}
            decStars={this.decreaseStars}
            toggleFavStatus={this.toggleFavStatus}
            toggleCartItem={this.toggleCartItem}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
