import * as React from "react";
import styled from "styled-components";

const BodyItem: React.FunctionComponent<{}> = styled.section`
  width: 100%;

  @media (min-width: 640px) and (max-width: 1023px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export default BodyItem;
