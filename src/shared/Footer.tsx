import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 50px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const ExportedFooter: React.FunctionComponent<{}> = () => {
  return <Footer>End of File</Footer>;
};

export default ExportedFooter;
