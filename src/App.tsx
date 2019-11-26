import * as React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";
import Grid from "./Grid";
import Nav from "./Nav";
import HeroHeader from "./HeroHeader";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContentFrame from "./shared/ContentFrame";

const App: React.FunctionComponent<{}> = () => {
  return (
    <HashRouter>
      <Grid>
        <Nav />
        <HeroHeader />
        <ContentFrame>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </ContentFrame>
      </Grid>
    </HashRouter>
  );
};

export default hot(module)(App);
