import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Importing the main component of your app
import './app.css'; // Importing your styles if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);