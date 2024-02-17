import React from "react";
import styled from "styled-components";

/* Styling using Styled Component */
const Nav = styled.div`
  width: 98.5%;
  height: 50px;
  background-color: #342fb7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 900;
  &:hover {
    color: blue;
  }
`;

const Cartimage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Subtitle = styled.span`
  padding: 5px 10px;
  background-color: #0f0e1f;
  border-radius: 10px;
`;

const Cartcontainer = styled.div`
  position: relative;
`;

const Itemcount = styled.span`
  position: absolute;
  background-color: yellow;
  border-radius: 50%;
  right: 0.5px;
  top: -5px;
  font-size: 0.8rem;
  padding: 0 7px;
  text-align: center;
  vertical-align: center;
  margin-bottom: 5px;
  font-weight: 700;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Title>
          Movie <Subtitle>Mania</Subtitle>
        </Title>
        <Cartcontainer>
          <Cartimage
            alt="Cart-Icon"
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
          />
          <Itemcount show={true}>0</Itemcount>
        </Cartcontainer>
      </Nav>
    );
  }
}

export default Navbar;

/* Styling using internal/inline styling */
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
