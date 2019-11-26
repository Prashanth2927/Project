import React, {Component} from 'react';
import './App.css';
import Products from './Components/Products';
import Output from './Components/Output';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  browserHistory
} from "react-router-dom";
import AddPage from './Components/AddPage';

import Demo from './Demo';

export default class App extends React.Component{
  render(){
    return(
<React.Fragment>
      <Router>
    <div className="App">
     
    <Switch>
    <Route exact path="/" component={Products} />
    <Route  path="/AddPage" component={AddPage} />
    </Switch>
    
    </div>
    </Router>
   </React.Fragment>
    );
  }
}