import * as React from "react";
import styled from "styled-components";

const BodyContent: React.FunctionComponent<{}> = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 50px 0;
`;

interface Props {}
const ExportedBodyContent: React.FunctionComponent<Props> = ({ children }) => {
  return <BodyContent>{children}</BodyContent>;
};

export default ExportedBodyContent;
