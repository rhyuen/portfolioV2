import * as React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const ContentFrame = styled.div`
  background-color: white;
  grid-column: 2 / span 12;
  padding: 30px;
`;

const ExportedContentFrame: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <ContentFrame>
      {children}
      <Footer />
    </ContentFrame>
  );
};

export default ExportedContentFrame;
