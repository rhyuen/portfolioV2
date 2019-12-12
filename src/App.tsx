import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import Nav from "./Nav";
import styled from "styled-components";
import Spinner from "./shared/Spinner";

const Root = styled.main`
  width: 100%;
`;

const Projects = React.lazy(() => import("./pages/Projects"));
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./NotFound"));

const App: React.FunctionComponent<{}> = () => {
  return (
    <HashRouter>
      <Root>
        <Nav />
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Root>
    </HashRouter>
  );
};

export default hot(module)(App);
