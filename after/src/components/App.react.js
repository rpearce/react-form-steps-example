import React, { Component } from 'react';
import Form from './form/';

class App extends Component {
  render() {
    return (
      <main role="main">
        <div className="banner"></div>
        <section aria-labelledby="stepForm-title" className="layout--constrained">
          <h2 id="stepForm-title">Pet Information</h2>
          <Form />
        </section>
      </main>
    );
  }
}

export default App;
