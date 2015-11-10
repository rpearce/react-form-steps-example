import React, { Component, PropTypes } from 'react';

class Step1 extends Component {
  render() {
    /*
     * TODO: Oh noes! We have terrible fake data
     * in here. Use the props passed from the parent
     * component to remedy this fake data.
     */
    const name = 'FAKENAME',
          type = 'FAKETYPE',
          age = 'FAKEAGE',
          gender = 'FAKEGENDER';
    return (
      <div>
        <div className="stepForm__item">
          <input type="text" id="stepForm-input1" className="stepForm__input" name="pet[name]" placeholder="Lola" defaultValue={ name } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input1" className="stepForm__label">Name</label>
        </div>
        <div className="stepForm__item">
          <input type="text" id="stepForm-input2" className="stepForm__input" name="pet[type]" placeholder="Golden Retriever" defaultValue={ type } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input2" className="stepForm__label">Type</label>
        </div>
        <div className="stepForm__item--borderless stepForm__item--nonText">
          <label className="stepForm__label">Gender</label>
          <input type="radio" name="pet[gender]" id="stepForm-input4" value="female" checked={ gender === 'female' } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input4">Female</label>
          <input type="radio" name="pet[gender]" id="stepForm-input5" value="male" checked={ gender === 'male' } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-input5">Male</label>
        </div>
        <div className="stepForm__actions">
          <button className="stepForm__btn--right btn btn--primary" onClick={ this.props.nextStep }>Next Step</button>
        </div>
      </div>
    );
  }
}

export default Step1;

