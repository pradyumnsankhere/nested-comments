// src/index.js or src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the store directly, not as a function
import App from './App';
import { setComments } from './redux/commentsSlice';

// Load state from localStorage
// src/index.js or src/index.jsx

// src/index.js or src/index.jsx

// Load state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Update the Redux store with the persisted state
store.dispatch(setComments(persistedState?.comments?.comments));

// Save state to localStorage whenever the store changes
store.subscribe(() => {
  const currentState = store.getState();
  localStorage.setItem('reduxState', JSON.stringify({ comments: currentState?.comments }));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
