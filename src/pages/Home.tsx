import * as React from "react";
import data from "../data/data.json";
import Grid from "../shared/Grid";
import HeroBanner from "../HeroHeader";
import ContentFrame from "../shared/ContentFrame";

const Home = () => (
  <Grid>
    <HeroBanner />
    <ContentFrame>
      <section>
        {data.projects.map(item => {
          return <p>{item.name}</p>;
        })}
      </section>
    </ContentFrame>
  </Grid>
);

export default Home;
