import * as React from "react";
import styled from "styled-components";

const Summary: React.FunctionComponent<{}> = styled.section`
  display: flex;
  font-size: 15px;
  padding: 50px 0;
  border-bottom: 5px solid black;
  margin-bottom: 100px;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 20px;
    padding: 75px 0;
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    padding: 100px 0;
    font-size: 25px;
  }
`;

interface Props {}
const ExportedSummary: React.FunctionComponent<Props> = ({ children }) => {
  return <Summary>{children}</Summary>;
};

export default ExportedSummary;
