import React, { Component, PropTypes } from 'react';
import Step1 from './Step1.react';
import Step2 from './Step2.react';
import Step3 from './Step3.react';

class Form extends Component {
  render() {
    return (
      <form className="stepForm" action="/" method="POST">
        {
          /*
           * We need to call the step code
           * logic housed in _getCurrentStep()
           * so that we can render the appropriate
           * step. Make it so!
           */
        }
      </form>
    );
  }

  _getCurrentStep() {
    switch (this.props.currentStep) {
      case 1:
        return <Step1 { ...this.props } />;
      case 2:
        return <Step2 { ...this.props }  />;
      case 3:
        return <Step3 { ...this.props } />;
      default:
        throw 'Invalid Step';
    }
  }
}

export default Form;
