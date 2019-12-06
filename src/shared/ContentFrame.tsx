import * as React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const ContentFrame = styled.div`
  background-color: white;
  grid-column: 2 / -2;
  padding: 0px;

  @media (min-width: 640px) and (max-width: 1023px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
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
