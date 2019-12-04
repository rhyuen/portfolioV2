import * as React from "react";
import * as Sentry from "@sentry/browser";
import Grid from "./shared/Grid";
import ContentFrame from "./shared/ContentFrame";
import styled from "styled-components";
import Banner from "./shared/Banner";
import Anchor from "./shared/Anchor";
import BodyItem from "./shared/BodyItem";

const Button = styled.button`
  background: black;
  padding: 20px;
  color: white;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.1s ease-in 0s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

interface Props {}

interface State {
  isError: boolean;
  eventId: string;
}
export default class RootErrorBoundary extends React.Component<Props, State> {
  state = {
    isError: false,
    eventId: ""
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error: Object, errorInfo: Object) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({
        eventId
      });
    });
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <Grid>
        <Banner>An error has occurred.</Banner>
        <ContentFrame>
          <BodyItem>
            <h1>An error has occurred.</h1>
            <p>
              Sometimes, despite one's best efforts, one makes mistakes that are
              observable to users. It is regretable. Click below to send some
              feedback so that I can potentially ameliorate the situation for
              future users. I will understand if you do or do not.
            </p>
            <p>
              <Button
                data-id={this.state.eventId}
                onClick={() =>
                  Sentry.showReportDialog({ eventId: this.state.eventId })
                }
              >
                Report feedback
              </Button>
            </p>
            <p>Click below to go back to the home page.</p>
            <p>
              <Anchor size={16} href="/">
                Home
              </Anchor>
            </p>
          </BodyItem>
        </ContentFrame>
      </Grid>
    ) : (
      children
    );
  }
}
