import * as React from "react";
import styled from "styled-components";

const BodyContent: React.FunctionComponent<{}> = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 50px 0;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

interface Props {}
const ExportedBodyContent: React.FunctionComponent<Props> = ({ children }) => {
  return <BodyContent>{children}</BodyContent>;
};

export default ExportedBodyContent;
