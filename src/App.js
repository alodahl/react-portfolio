import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import ContactPage from './components/ContactPage'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Navbar/>
        <main role="main">
          <Switch>
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </main>
    </div>
    );
  }
}

export default App;
