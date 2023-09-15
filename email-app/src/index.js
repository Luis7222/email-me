// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main application component (e.g., App.js)
import './index.css'; // You can import CSS or other styles here if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
