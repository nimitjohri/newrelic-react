import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from 'react';
import Contacts from './components/contacts';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';


// declare global {
//   interface Window {
//       newrelic:any;
//   }
// }


export var newrelic = window.newrelic
export class App extends Component  {
  // useEffect(() => {
  //   const headers = { 'Content-Type': 'application/json',
  //    'newrelic': 'newrelic-test', 'tracestate': 'tracestate_test', 'traceparent': 'traceparent_test' }
  //   fetch('http://jsonplaceholder.typicode.com/users', {headers})
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //   })
  //   .catch(console.log)
  // },[])
  render() {
    return (
      // <Contacts contacts={this.state.contacts} />
      <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;