import * as React from "react";
import styled from "styled-components";
import Grid from "../shared/Grid";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";

const PG = styled.section`
  background-color: palevioletred;
  grid-column: 2 / span 12;
`;

const About = () => (
  <Grid>
    <Banner>About Me</Banner>
    <ContentFrame>
      <section>
        <p>Hello, here are some facts regarding myself.</p>
        <p>I'm an avid attendee of meetups.</p>
        <p>
          I plan on speaking at some point in the future. The topic of which is
          up for deliberation.
        </p>
      </section>
      <h1>Follow Me!</h1>
      <section>
        <a>Twitter</a>
        <a>Github</a>
        <a>LinkedIn</a>
      </section>
    </ContentFrame>
  </Grid>
);

export default About;
