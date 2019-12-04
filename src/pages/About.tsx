import * as React from "react";
import Grid from "../shared/Grid";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";
import BodyItem from "../shared/BodyItem";
import Anchor from "../shared/Anchor";
import data from "../data/data.json";

const About = () => (
  <Grid>
    <Banner>About Me</Banner>
    <ContentFrame>
      <Summary>{data.about.summary}</Summary>
      <BodyContent>
        <BodyItem>
          <h1>What can I do ?</h1>
          <p>{data.about.value}</p>
        </BodyItem>
        <BodyItem>
          <h1>Interests</h1>
          <p>{data.about.interests}</p>
        </BodyItem>
        <BodyItem>
          <h1>Future plans</h1>
          <p>{data.about.exposition}</p>
        </BodyItem>
      </BodyContent>

      <BodyItem>
        <h1>Credits</h1>
        <p>
          I took heavy inspiration for this site from &nbsp;
          <Anchor size={16} href="https://thefox.is/">
            here.
          </Anchor>
        </p>
      </BodyItem>

      <BodyContent>
        <h1>Social</h1>
        <Anchor size={16} href={data.social.twitter}>
          Twitter
        </Anchor>
        <Anchor size={16} href={data.social.github}>
          Github
        </Anchor>
        <Anchor size={16} href={data.social.linkedin}>
          LinkedIn
        </Anchor>
      </BodyContent>
    </ContentFrame>
  </Grid>
);

export default About;
