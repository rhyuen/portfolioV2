import * as React from "react";
import styled from "styled-components";
import ContentFrame from "../shared/ContentFrame";
import Summary from "../shared/Summary";
import Grid from "../shared/Grid";

const Banner = styled.section`
  grid-column: 1 / span 14;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  height: 30vh;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 4rem;
`;
const ShrunkImage = styled.img`
  height: 200px;
  width: 200px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

const Projects = () => (
  <Grid>
    <Banner>Projects</Banner>
    <ContentFrame>
      <Summary>
        Here's a curated listing of Personal Projects that I've done (bigger,
        smaller and ongoing).
      </Summary>

      <h1>Older Projects</h1>
    </ContentFrame>
  </Grid>
);

export default Projects;
