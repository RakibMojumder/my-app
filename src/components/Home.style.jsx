import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h1>Press Get User button to show users</h1>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    font-size: 30px;
    text-align: center;
    margin-top: 200px;
    color: #7c44ff;
    text-transform: uppercase;
  }
`;

export default Home;
