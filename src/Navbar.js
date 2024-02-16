import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div style={styles.nav}>
        <div className="title-container" style={styles.title}>
          Movie <span style={styles.title_span}>Mania</span>
        </div>
        <div
          className="cart-count-container"
          style={styles.cart_count_container}
        >
          <img
            alt="Cart-Icon"
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
            style={styles.cart__image}
          />
          <span className="Item-Count" style={styles.item_count_container}>
            0
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;

const styles = {
  nav: {
    width: "98.5%",
    height: "50px",
    backgroundColor: "#342fb7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  title: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "900",
  },
  title_span: {
    padding: "5px 10px",
    backgroundColor: "#0f0e1f",
    borderRadius: "10px",
  },
  cart__image: { width: "50px", height: "50px", marginRight: "10px" },
  item_count_container: {
    position: "absolute",
    backgroundColor: "yellow",
    borderRadius: "50%",
    right: "0.5px",
    top: "-5px",
    fontSize: "0.8rem",
    padding: "0 7px",
    textAlign: "center",
    verticalAlign: "center",
    marginBottom: "5px",
    fontWeight: "700",
  },
  cart_count_container: { position: "relative" },
};
