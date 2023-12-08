// src/index.js or src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the store directly, not as a function
import App from './App';
import { setComments } from './redux/commentsSlice';


const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

store.dispatch(setComments(persistedState?.comments?.comments));

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
