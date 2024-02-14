import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      poster_url:
        "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
      title: "The Avengers",
      plot: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios'grand conclusion to twenty-two films, 'Avengers: Endgame.'",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
  }

  increaseStars = () => {
    this.setState((prevState) => {
      if (prevState.stars < 5) {
        return {
          stars: prevState.stars + 0.5,
        };
      }
    });
  };

  decreaseStars = () => {
    this.setState((prevState) => {
      if (prevState.stars > 0) {
        return {
          stars: prevState.stars - 0.5,
        };
      }
    });
  };

  render() {
    const { poster_url, title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left" role="img">
            <img alt="Poster" src={poster_url} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  alt="Minus Button"
                  className="str-btn"
                  onClick={this.decreaseStars}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  alt="Star"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  alt="Plus Button"
                  className="str-btn"
                  onClick={this.increaseStars}
                />
                <span className="starCount">{stars}</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
