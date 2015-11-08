import React from 'react';
import { render } from 'react-dom';
import App from './components/App.react';

const container = document.createElement('div');
document.body.appendChild(container);

render(<App />, container);
