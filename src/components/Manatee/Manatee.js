import React from 'react';

export default function Manatee() {
    var myInteraction = window.newrelic.interaction().setName("/manatee")
    myInteraction.save()

  return <h2>Manatee</h2>;
}