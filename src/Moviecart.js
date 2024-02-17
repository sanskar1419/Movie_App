import React from "react";

function MovieCard(props) {
  const { poster_url, title, plot, price, rating, stars, favourite, cart } =
    props.movie;
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
                onClick={() => {
                  props.decStars(props.movie);
                }}
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
                onClick={() => {
                  props.addStars(props.movie);
                }}
              />
              <span className="starCount">{stars}</span>
            </div>
            <button
              className={favourite ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => {
                props.toggleFavStatus(props.movie);
              }}
            >
              {favourite ? "Un-Favourite" : "Favourite"}
            </button>

            <button
              className={cart ? "remove-cart-btn" : "cart-btn"}
              onClick={() => {
                props.toggleCartItem(props.movie);
              }}
            >
              {cart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
