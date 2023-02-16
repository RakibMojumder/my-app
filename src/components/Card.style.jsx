import React from "react";
import styled from "styled-components";

const Card = ({ user }) => {
  return (
    <Container>
      <div className="avatar-div">
        <img src={user.avatar} alt="" />
      </div>
      <h1>{user.first_name + " " + user.last_name}</h1>
      <p>{user.email}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #ddd;

  .avatar-div img {
    width: 100%;
    height: 200px;
    /* border-radius: 10px 10px 0; */
  }

  h1 {
    font-size: 25px;
    color: #7c44ff;
  }
  p {
    color: #3c3a3a;
    font-weight: 500;
  }
`;

export default Card;
