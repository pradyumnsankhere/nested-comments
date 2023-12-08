import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    auth: authReducer,
  },
});

export default store;
