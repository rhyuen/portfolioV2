import * as React from "react";
import Grid from "../shared/Grid";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";
import BodyItem from "../shared/BodyItem";
import Anchor from "../shared/Anchor";
import data from "../data/data.json";
import styled from "styled-components";
import Spinner from "../shared/Spinner";

const Map = styled.div`
  filter: grayscale(100%);
`;



const About = () => (
  <Grid>
    <Banner>About Me</Banner>
    <ContentFrame>
      <Summary>{data.about.summary}</Summary>
      <React.Suspense fallback={<Spinner />}>
        <Map>
          <iframe width="100%" height="400" frameBorder="0" src="https://www.bing.com/maps/embed?h=400&w=700&cp=49.2830126088412~-123.12079083919528&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
          </iframe>
        </Map>
      </React.Suspense>
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
