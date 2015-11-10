import React, { Component } from 'react';
import Form from './form/';

class App extends Component {
  static defaultProps = {
    currentStep: 1,
    pet: {},
    pets: [{ name: 'Molly', type: 'Golden Retriever', gender: 'female' }]
  }

  constructor(props) {
    super(props);
    this.state = { currentStep: props.currentStep, pet: props.pet, pets: props.pets };
  }

  componentWillMount() {
    this._fetchFromStorage();
  }

  render() {
    return (
      <main role="main">
        <div className="layout--leftHalf banner"></div>
        <div className="layout--rightHalf">
          <div className="layout--constrained">
            <section aria-labelledby="stepForm-title">
              <h2 id="stepForm-title">Pet Information</h2>
              <Form
                currentStep={ this.state.currentStep }
                pet={ this.state.pet }
                setStep={ this._setStep.bind(this) }
                setItem={ this._setItem.bind(this) }
                prevStep={ this._prevStep.bind(this) }
                nextStep={ this._nextStep.bind(this) }
                complete={ this._complete.bind(this) } />
            </section>
            <section aria-labelledby="data-title">
              <h2 id="data-title">Pets</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th class="align--center">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pets.reverse().map(function(pet) {
                    /*
                     * Example showing you can put this code
                     * directly in the JSX.
                     */
                    const genderCode = pet.gender === 'male' ? 9794 : 9792;
                    return (
                      <tr>
                        <td>{ pet.name }</td>
                        <td>{ pet.type }</td>
                        <td className="align--center">{ String.fromCharCode(genderCode) }</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </div>
        </div>
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
    } else {
      let pet = Object.assign({}, this.props.pet);
      this.setState({ currentStep: this.props.currentStep, pet });
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

  _complete(e) {
    e.preventDefault();
    window.localStorage.clear();
    this.setState({ pets: this.state.pets.concat(this.state.pet) });
    this._fetchFromStorage();
  }
}

export default App;
