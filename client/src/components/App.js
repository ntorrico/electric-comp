import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import Navigation from "./Navigation.js";
import Footer from "./Footer";
import asyncComponent from './AsyncComponent';
import MemberItem from './About/MemberItem'
import "../sass/App.scss";

const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)
const About = asyncComponent(() =>
    import('./About/About').then(module => module.default)
)
class App extends Component {
  render() {
    return (
      <div className="App">

      <Navigation />
        <Container className="app-container" fluid={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/members/:memberName" component={MemberItem}/>
        </Switch>
        <Footer/>
      </Container>
      </div>
    );
  }
}

export default App;
