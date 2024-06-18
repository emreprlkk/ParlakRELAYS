/*import * as React from "react";
import { render } from "react-dom";
import { LineChart } from "./LineChart";

//import "./styles.css";

function Appp() {
  return <LineChart />;
}

const rootElement = document.getElementById("root");
render(<Appp />, rootElement);*/
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
