import React from 'react';
import { render } from 'react-dom';
import Geocities from './components/Geocities.react';

const container = document.createElement('div');
document.body.appendChild(container);

render(<Geocities />, container);
