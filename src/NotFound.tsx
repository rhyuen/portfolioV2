import * as React from "react";
import Grid from "./shared/Grid";
import ContentFrame from "./shared/ContentFrame";
import Banner from "./shared/Banner";
import Summary from "./shared/Summary";

interface Props {}

const NotFound: React.FunctionComponent<Props> = () => {
  return (
    <Grid>
      <Banner>Page not found.</Banner>
      <ContentFrame>
        <Summary>I cannot find the page you're looking for.</Summary>
      </ContentFrame>
    </Grid>
  );
};

export default NotFound;
