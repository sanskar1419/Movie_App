import React from "react";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left" role="img">
            <img
              alt="Poster"
              src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
            />
          </div>
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">
              The grave course of events set in motion by Thanos that wiped out
              half the universe and fractured the Avengers ranks compels the
              remaining Avengers to take one final stand in Marvel Studios'
              grand conclusion to twenty-two films, "Avengers: Endgame."
            </div>
            <div className="price">Rs. 199</div>
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  alt="Minus Button"
                  className="str-btn"
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
                />
                <span className="starCount">0</span>
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
