import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from './chatreducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  // Add other reducers here if needed
});

export default rootReducer;