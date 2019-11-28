import React, { Component } from 'react';
import './App.css';
import Products from './Components/Products';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddPage from './Components/AddPage';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/AddPage" component={AddPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}