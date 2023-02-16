import React from "react";
import { BarLoader } from "react-spinners";
import styled from "styled-components";

const Loader = ({ loading }) => {
  return (
    <Container>
      <BarLoader
        color="#7c44ff"
        loading={loading}
        height={4}
        width="100%"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default Loader;
