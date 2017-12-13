// c'est parti !
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';
import './css/style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}


render(<Root/>, document.querySelector("#main"));
