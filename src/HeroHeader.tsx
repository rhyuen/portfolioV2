import * as React from "react";
import styled from "styled-components";

const HeroHeader: React.FunctionComponent<{}> = styled.section`
  grid-column: 1 / -1;
  color: black;
  display: grid;
  background-color: #f3f3f3;
  margin-bottom: 10px;
  height: 75vh;
  font-size: 2rem;

  font-weight: bold;
  justify-content: center;
  word-wrap: break-word;
  align-items: center;

  @media (min-width: 640px) and (max-width: 1023px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const ExportedHeroHeader: React.FunctionComponent<{}> = () => {
  return <HeroHeader>Hi, I'm Robert. A web developer.</HeroHeader>;
};

export default ExportedHeroHeader;
