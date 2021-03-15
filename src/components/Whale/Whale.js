import React from 'react';
import { newrelic } from '../../App';

export default function Whale() {
    var myInteraction = window.newrelic.interaction().setName("/users")
    myInteraction.createTracer("get User")
    myInteraction.save()
    // newrelic.setPageViewName("Users1", 'http://jsonplaceholder.typicode.com/users')
    // myInteraction.createTracer("get User")

   const headers = { 'Content-Type': 'application/json'
    //  'newrelic': 'newrelic-test', 'tracestate': 'tracestate_test', 'traceparent': 'traceparent_test'
      }
    fetch('http://jsonplaceholder.typicode.com/users', {headers})
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
    fetch('http://jsonplaceholder.typicode.com/users?id=2', {headers})
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)

  return <h2>Whale</h2>;
}