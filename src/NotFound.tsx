import * as React from "react";
import Grid from "./shared/Grid";
import ContentFrame from "./shared/ContentFrame";
import Banner from "./shared/Banner";

interface Props {}

const NotFound: React.FunctionComponent<Props> = () => {
  return (
    <Grid>
      <ContentFrame>
        <Banner>Page not found.</Banner>
      </ContentFrame>
    </Grid>
  );
};

export default NotFound;
