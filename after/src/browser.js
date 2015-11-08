import React from 'react';
import { render } from 'react-dom';
import App from './components/App.react';

//const existingData = window.localStorage.example;
//let currentStep = 1,
//    pet = {};

//if (existingData) {
//  let parsedData = JSON.parse(existingData);
//  currentStep = parsedData.currentStep;
//  pet = parsedData.pet;
//}

const container = document.createElement('div');
document.body.appendChild(container);

render(<App />, container);
