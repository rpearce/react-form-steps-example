import React, { Component } from 'react';

class Step2 extends Component {
  render() {
    const { owner, address, phone } = this.props.pet;
    return (
      <div>
        <div className="stepForm__item">
          <input type="text" id="stepForm-input6" className="stepForm__input" name="pet[owner]" placeholder="John Q." defaultValue={ owner } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input6" className="stepForm__label">Owner</label>
        </div>
        <div className="stepForm__item">
          <input type="text" id="stepForm-input7" className="stepForm__input" name="pet[address]" placeholder="123 Main Street" defaultValue={ address } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input7" className="stepForm__label">Address</label>
        </div>
        <div className="stepForm__item--borderless">
          <input type="text" id="stepForm-input8" className="stepForm__input" name="pet[phone]" placeholder="555.867.5309" defaultValue={ phone } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input8" className="stepForm__label">Phone</label>
        </div>
        <div className="stepForm__actions">
          <button className="stepForm__btn--left btn btn--secondary" onClick={ this.props.prevStep }>Previous Step</button>
          <button className="stepForm__btn--right btn btn--primary" onClick={ this.props.nextStep }>Next Step</button>
        </div>
      </div>
    );
  }
}

export default Step2;

