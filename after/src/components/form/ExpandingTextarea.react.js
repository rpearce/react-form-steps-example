import React, { Component, PropTypes } from 'react';

const { func, string } = PropTypes;

class ExpandingTextarea extends Component {
  static propTypes = {
    className: string,
    defaultValue: string,
    maxLength: string,
    name: string,
    placeholder: string,
    rows: string,
    onChange: func
  }

  componentDidMount() {
    this._adjustTextarea({});
  }

  render() {
    return <textarea { ...this.props } ref="textarea" onChange={ this._handleChange.bind(this) }></textarea>;
  }

  _handleChange(e) {
    this.props.onChange(e);
    this._adjustTextarea(e);
  }

  _adjustTextarea({ target = this.refs.textarea }) {
    target.style.height = 0;
    target.style.height = target.scrollHeight + 'px';
  }

  _calculateRows() {
    const node = this.refs.textarea,
          fontSize = parseInt(window.getComputedStyle(node, null).getPropertyValue('font-size'));
    return Math.floor(node.scrollHeight / fontSize) - 1;
  }
}

export default ExpandingTextarea;
