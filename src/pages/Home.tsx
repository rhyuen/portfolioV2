import * as React from "react";
import data from "../data/data.json";
import Grid from "../shared/Grid";
import HeroBanner from "../HeroHeader";
import ContentFrame from "../shared/ContentFrame";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";
import BodyItem from "../shared/BodyItem";
import styled from "styled-components";
import Anchor from "../shared/Anchor";
import { v4 } from "uuid";

const Tag = styled.span`
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.1s ease-in 0s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ShrunkImage = styled.img`
  height: 200px;
  width: 200px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  filter: grayscale(100%);
  opacity: 0.5;
`;

const ItemContainer = styled.article`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
`;

const TextContent = styled(BodyItem)`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Home = () => (
  <Grid>
    <HeroBanner />
    <ContentFrame>
      <Summary>{data.summary}</Summary>
      <BodyContent>
        {data.highlights.map(item => {
          return (
            <ItemContainer key={v4()}>
              <ShrunkImage
                src={require(`../images/${item.image}`)}
                alt="Screenshot of linked web application"
              />
              <TextContent>
                <Anchor size={28} href={item.link}>
                  {item.name}
                </Anchor>
                <p>{item.description}</p>
                <p>
                  Uses: &nbsp;
                  {item.tags.map(t => (
                    <Tag key={v4()}>{t}</Tag>
                  ))}
                </p>
              </TextContent>
            </ItemContainer>
          );
        })}
      </BodyContent>
    </ContentFrame>
  </Grid>
);

export default Home;
