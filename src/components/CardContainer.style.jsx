import React from "react";
import styled from "styled-components";
import Card from "./Card.style";
import Loader from "./Loader.style";

const CardContainer = ({ users, loading }) => {
  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <Container>
      <div className="card-container">
        {users?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 40px;

  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media screen and (min-width: 600px) and (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default CardContainer;
