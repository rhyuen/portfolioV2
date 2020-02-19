import * as React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner: React.FunctionComponent<{}> = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top-color: rgb(150, 150, 150);
  animation: ${rotate} 1s 0s infinite linear;
`;

const Container = styled.main`
  width: 100vw;
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ExportedSpinner = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default ExportedSpinner;
