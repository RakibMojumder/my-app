import React from "react";
import styled from "styled-components";

const Navbar = ({ getUsersData }) => {
  return (
    <Container>
      <div className="navbar">
        <h1>Brand</h1>
        <button onClick={getUsersData}>Get user</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px -4px #ddd;

  .navbar {
    width: 80%;
    margin: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  h1 {
    color: #7c44ff;
    text-transform: uppercase;
  }
  button {
    padding: 10px 30px;
    background-color: #7c44ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default Navbar;
