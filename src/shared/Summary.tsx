import * as React from "react";
import styled from "styled-components";

const Summary: React.FunctionComponent<{}> = styled.section`

  display: flex;
  font-size: 25px;
  padding: 100px 0;
  width: 100%;
  border-bottom: 5px solid black;
  margin-bottom: 100px;

  @media (min-width: 640px) and (max-width: 1023px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
`;

interface Props {}
const ExportedSummary: React.FunctionComponent<Props> = ({ children }) => {
  return <Summary>{children}</Summary>;
};

export default ExportedSummary;
