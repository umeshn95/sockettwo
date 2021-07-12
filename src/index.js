import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";


import APP from './App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
