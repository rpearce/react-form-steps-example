import React, { Component } from 'react';
import Step1 from './Step1.react';
import Step2 from './Step2.react';
import Step3 from './Step3.react';

class Form extends Component {
  render() {
    return (
      <form className="stepForm" action="/" method="POST">
        <Step1 />
        <Step2 />
        <Step3 />
      </form>
    );
  }
}

export default Form;
