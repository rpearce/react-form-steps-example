import React, { Component } from 'react';

class Step1 extends Component {
  render() {
   return (
     <div>
      <div className="stepForm__item">
        <input type="text" id="stepForm-input1" className="stepForm__input" placeholder="Lola" />
        <label htmlFor="stepForm-input1" className="stepForm__label">Name</label>
      </div>
      <div className="stepForm__item">
        <input type="text" id="stepForm-input2" className="stepForm__input" placeholder="Golden Retriever" />
        <label htmlFor="stepForm-input2" className="stepForm__label">Type</label>
      </div>
      <div className="stepForm__item">
        <select id="stepForm-input3" className="stepForm__select">
          <option>&lt; 1</option>
          { this._buildAgeOpts.call(this) }
          <option>&gt; 15</option>
        </select>
        <label htmlFor="stepForm-input3" className="stepForm__label">Age</label>
      </div>
      <div className="stepForm__item--borderless stepForm__item--nonText">
        <label className="stepForm__label">Gender</label>
        <input type="radio" id="stepForm-input4" checked />
        <label htmlFor="stepForm-input4">Female</label>
        <input type="radio" id="stepForm-input5" />
        <label htmlFor="stepForm-input5">Male</label>
      </div>

      <div className="stepForm__actions">
        <button className="stepForm__btn--right btn btn--primary">Next Step</button>
      </div>
    </div>
   );
  }

  /*
   * Builds a list of HTML <option> tags
   * for the numbers 1 - 15
   */
  _buildAgeOpts() {
    return Array.from(Array(15).keys()).reduce((mem, i) => {
      mem.push(<option key={`stepForm-input3-option-${ i }`}>{ i + 1 }</option>);
      return mem;
    }, []);
  }
}

export default Step1;

