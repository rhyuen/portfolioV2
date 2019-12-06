import * as React from "react";
import data from "../data/data.json";
import Grid from "../shared/Grid";
import HeroBanner from "../HeroHeader";
import ContentFrame from "../shared/ContentFrame";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";
import List from "../shared/List";

const Home = () => (
  <Grid>
    <HeroBanner />
    <ContentFrame>
      <Summary>{data.summary}</Summary>
      <BodyContent>
        <List data={data.highlights} />
      </BodyContent>
    </ContentFrame>
  </Grid>
);

export default Home;
