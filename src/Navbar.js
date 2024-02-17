import React from "react";
import styled from "styled-components";
import navbar from "./navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className={navbar.nav}>
        <div className={navbar.title}>
          Movie <span className={navbar.subtitle}>Mania</span>
        </div>
        <div className={navbar.cartContainer}>
          <img
            className={navbar.cartImage}
            alt="Cart-Icon"
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
          />
          <span className={navbar.itemCount}>0</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
