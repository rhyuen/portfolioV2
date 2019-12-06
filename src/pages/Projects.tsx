import * as React from "react";
import styled from "styled-components";
import ContentFrame from "../shared/ContentFrame";
import Summary from "../shared/Summary";
import Grid from "../shared/Grid";
import List from "../shared/List";
import data from "../data/data.json";

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

const Projects = () => (
  <Grid>
    <Banner>Projects</Banner>
    <ContentFrame>
      <Summary>
        Here's a curated listing of Personal Projects that I've done.
      </Summary>
      <List data={data.highlights} />
    </ContentFrame>
  </Grid>
);

export default Projects;
