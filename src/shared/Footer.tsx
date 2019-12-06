import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 50px 0;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: space-between;
`;

const ExportedFooter: React.FunctionComponent<{}> = () => {
  return (
    <Footer>
      <span>WRITTEN BY ME!</span>
      <span>Last Updated: DE5/19</span>
    </Footer>
  );
};

export default ExportedFooter;
