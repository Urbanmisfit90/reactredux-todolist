import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; // Ensure the path is correct
import App from './App'; // Adjust the path if necessary
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


