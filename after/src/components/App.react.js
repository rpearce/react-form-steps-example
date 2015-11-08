import React, { Component } from 'react';
import Form from './form/';

class App extends Component {
  static defaultProps = { currentStep: 1, pet: {} }

  constructor(props) {
    super(props);
    this.state = { currentStep: props.currentStep, pet: props.pet };
  }

  componentWillMount() {
    this._fetchFromStorage();
  }

  render() {
    return (
      <main role="main">
        <div className="banner"></div>
        <section aria-labelledby="stepForm-title" className="layout--constrained">
          <h2 id="stepForm-title">Pet Information</h2>
          <Form
            currentStep={ this.state.currentStep }
            pet={ this.state.pet }
            setStep={ this._setStep.bind(this) }
            setItem={ this._setItem.bind(this) }
            prevStep={ this._prevStep.bind(this) }
            nextStep={ this._nextStep.bind(this) } />
        </section>
      </main>
    );
  }

  _fetchFromStorage() {
    const existingData = window.localStorage.getItem('example');
    if (existingData) {
      let parsedData = JSON.parse(existingData),
          currentStep = parsedData.currentStep,
          pet = parsedData.pet;
      this.setState({ currentStep, pet });
    }
  }

  _prevStep() {
    this._setStep(this.state.currentStep - 1);
  }

  _nextStep() {
    this._setStep(this.state.currentStep + 1);
  }

  _setStep(step) {
    const updatedState = JSON.stringify({ currentStep: step, pet: this.state.pet });
    this._updateStorage(updatedState);
  }

  _setItem(e) {
    const node = e.target,
          { name, type } = node,
          value = type === 'checkbox' ? node.checked : node.value,
          key = name.match(/\[(.*?)\]/)[1],
          obj = { [key]: value },
          updatedPet = Object.assign(this.state.pet, obj),
          updatedState = JSON.stringify({ currentStep: this.state.currentStep, pet: updatedPet });
    this._updateStorage(updatedState);
  }

  _updateStorage(json) {
    window.localStorage.setItem('example', json);
    this._fetchFromStorage();
  }
}

export default App;
