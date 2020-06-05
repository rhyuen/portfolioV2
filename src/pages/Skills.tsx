import * as React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";
import Summary from "../shared/Summary";
import Grid from "../shared/Grid";
import { v4 } from "uuid";

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
`;
const Skills = () => {
  return (
    <Grid>
      <Banner>Skills</Banner>
      <ContentFrame>
        <Summary>
          <h1>Skills / Technologies I use.</h1>
          <UnsortedList>
            {data.skills.map(item => {
              return <ListItem key={v4()}>{item}</ListItem>;
            })}
          </UnsortedList>
        </Summary>
        <Summary>
          <h1>No longer used.</h1>
          <UnsortedList>
            {data.disuse.map(item => {
              return <ListItem key={v4()}>{item}</ListItem>;
            })}
          </UnsortedList>
        </Summary>
      </ContentFrame>
    </Grid>
  );
};

export default Skills;
