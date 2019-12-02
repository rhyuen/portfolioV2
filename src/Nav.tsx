import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Anchor from "./shared/Anchor";
import data from "./data/data.json";

const StyledNav: React.FunctionComponent<{}> = styled.nav`
  display: grid;
  grid-template-columns:
    minmax(20px, 1fr)
    repeat(12, minmax(auto, 100px))
    minmax(20px, 1fr);
  background-color: #f3f3f3;
  height: 15vh;
`;

const LeftSection = styled.section`
  height: 100%;
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RightSection = styled.section`
  height: 100%;
  grid-column: 11 / span 1;
  display: flex;
  align-items: flex-end;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  margin-right: 40px;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in 0s;

  &:hover {
    border-bottom-color: black;
  }
`;

const Nav: React.FunctionComponent<{}> = () => {
  return (
    <StyledNav>
      <LeftSection>
        <StyledLink to="/">Robert</StyledLink>
      </LeftSection>
      <RightSection>
        <StyledLink to="/projects">Projects</StyledLink>
        <Anchor size={16} href={data.social.blog}>
          Blog
        </Anchor>
        <StyledLink to="/about">About</StyledLink>
      </RightSection>
    </StyledNav>
  );
};

export default Nav;
