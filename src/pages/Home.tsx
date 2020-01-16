import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import Grid from "../shared/Grid";
import HeroBanner from "../HeroHeader";
import ContentFrame from "../shared/ContentFrame";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";
import List from "../shared/List";

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  padding: 0 5px;

  &:hover {
    text-decoration: underline;
    background: rgba(0, 0, 0, 0.1);
  }

  &:visited {
    color: black;
  }
`;

const Home = () => (
  <Grid>
    <HeroBanner />
    <ContentFrame>
      <Summary>
        {data.summary}
        <br />
        <br />
        <div>
          Click <StyledLink to="/skills">here</StyledLink> for a more
          comprehensive list of my skills.
        </div>
      </Summary>
      <BodyContent>
        <List data={data.highlights} />
      </BodyContent>
    </ContentFrame>
  </Grid>
);

export default Home;
