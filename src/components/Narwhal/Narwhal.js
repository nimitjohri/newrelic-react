
import React from 'react';

export default function Narwhal() {
    var myInteraction = window.newrelic.interaction().setName("/narwhal")
    myInteraction.save()

  return <h2>Narwhal</h2>;
}