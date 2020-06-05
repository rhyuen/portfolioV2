import * as React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import BodyItem from "./BodyItem";
import Anchor from "./Anchor";

const Tag = styled.span`
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px 0;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.1s ease-in 0s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ShrunkImage = styled.img`
  display: none;
  height: 200px;
  width: 200px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  filter: grayscale(100%);
  opacity: 0.5;

  @media (min-width: 640px) and (max-width: 1023px) {
    display: block;
    height: 150px;
    width: 150px;
  }

  @media (min-width: 1024px) {
    display: block;
    height: 200px;
    width: 200px;
  }
`;

const ItemContainer = styled.article`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  justify-content: flex-start;
`;

const TextContent = styled(BodyItem)`
  display: flex;
  flex-direction: column;
  margin-left: 0;

  @media (min-width: 640px) and (max-width: 1023px) {
    margin-left: 20px;
  }

  @media (min-width: 1024px) {
    margin-left: 40px;
  }
`;
interface Highlight {
  name: string;
  date: string;
  image: string;
  description: string;
  motivation: string;
  link: string;
  tags: Array<string>;
}

interface Props {
  data: Array<Highlight>;
}
const TagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const TextBlurb = styled.p`
  overflow-wrap: break-word;
`;

const List: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      {data.map((item: Highlight) => {
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
              <TextBlurb>{item.description}</TextBlurb>
              <TagContainer>
                {item.tags.map((t: string) => (
                  <Tag key={v4()}>{t}</Tag>
                ))}
              </TagContainer>
            </TextContent>
          </ItemContainer>
        );
      })}
    </>
  );
};

export default List;
