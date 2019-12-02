import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import Nav from "./Nav";
import styled from "styled-components";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

const Root = styled.main`
  width: 100%;
`;

const App: React.FunctionComponent<{}> = () => {
  return (
    <HashRouter>
      <Root>
        <Nav />
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Root>
    </HashRouter>
  );
};

export default hot(module)(App);
