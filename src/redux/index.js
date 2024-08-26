import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css'; // Ensure this is the path to your CSS file

// Create a root element for React
const root = createRoot(document.getElementById('root'));

// Render the React app within the root element
root.render(
  <Provider store={store}> {/* Provide the Redux store to the React app */}
    <App /> {/* Your main application component */}
  </Provider>
);
