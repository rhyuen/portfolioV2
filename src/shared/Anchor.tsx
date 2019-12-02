import * as React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  size: number;
}

const StyledAnchor = styled.a<Props>`
  font-size: ${props => props.size}px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  margin-right: 40px;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease-in 0s;
  width: fit-content;

  &:hover {
    border-bottom-color: black;
  }
`;

const ExportedStyledAnchor: React.FunctionComponent<Props> = ({
  href,
  size,
  children
}) => {
  return (
    <StyledAnchor href={href} size={size}>
      {children}
    </StyledAnchor>
  );
};

export default ExportedStyledAnchor;
