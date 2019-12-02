import * as React from "react";
import styled from "styled-components";

const HeroHeader: React.FunctionComponent<{}> = styled.section`
  grid-column: 1 / span 14;
  color: black;
  display: grid;
  background-color: #f3f3f3;
  height: 75vh;
  font-size: 4rem;
  font-weight: bold;
  justify-items: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ExportedHeroHeader: React.FunctionComponent<{}> = () => {
  return <HeroHeader>Hi, I'm Robert. A web developer.</HeroHeader>;
};

export default ExportedHeroHeader;
