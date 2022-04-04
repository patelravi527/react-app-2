import './App.css';
import React, { Component } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress:0,
  }

  setProgress = (progress) => {
    this.setState({
      progress : progress,
    })
  }
  render() {
  return (
    <>
    <Router>
      <Navbar/>
      <LoadingBar color='#d7183e' progress={this.state.progress} height={3}/>
      <Switch>
          <Route key="technology" exact path="/"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="" country="in" /> </Route>
          <Route key="technology" exact path="/technology"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="technology" country="in" /> </Route>
          <Route key="business" exact path="/business"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="business" country="in" /> </Route>
          <Route key="entertainment" exact path="/entertainment"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="entertainment" country="in" /> </Route>
          <Route key="general" exact path="/general"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="general" country="in" /> </Route>
          <Route key="health" exact path="/health"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="health" country="in" /> </Route>
          <Route key="science" exact path="/science"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="science" country="in" /> </Route>
          <Route key="sports" exact path="/sports"> <News setProgress={this.setProgress}showNews={8} apiKey={this.apiKey} category="sports" country="in" /> </Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
  }
}

// export default App;
