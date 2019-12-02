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
      <Summary>Some details about me.</Summary>
      <BodyContent>
        <BodyItem>I'm an avid attendee of meetups.</BodyItem>
        <BodyItem>
          I plan on speaking at a local meetup at some point in the future. The
          topic of which is up for deliberation. I am leaning towards something
          OWASP and Javascript.
        </BodyItem>
      </BodyContent>
      <h1>Follow Me!</h1>
      <BodyContent>
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
