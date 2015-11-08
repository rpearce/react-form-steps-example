import React, { Component } from 'react';
import ExpandingTextarea from './ExpandingTextarea.react';

class Step3 extends Component {
  render() {
    const { notes, termsAccepted } = this.props.pet;
    return (
      <div>
        <div>
          <ExpandingTextarea rows="1" maxLength="3000" className="stepForm__textarea" name="pet[notes]" placeholder="Additional notes" defaultValue={ notes } onChange={ this.props.setItem } />
        </div>
        <div>
          <input type="checkbox" id="stepForm-agree" name="pet[termsAccepted]" checked={ termsAccepted } onChange={ this.props.setItem } />
          <label htmlFor="stepForm-agree">I agree to the Terms &amp; Conditions</label>
        </div>
        <div className="stepForm__actions">
          <button className="stepForm__btn--left btn btn--secondary" onClick={ this.props.prevStep }>Previous Step</button>
          <button className="stepForm__btn--right btn btn--primary" onClick={ this.props.submit }>Complete</button>
        </div>
      </div>
    );
  }
}

export default Step3;
