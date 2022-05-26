import {configureStore} from '@reduxjs/toolkit';
import todosReducer from './todos';

export const store = configureStore({
  reducer: {
    todosReducer: todosReducer, // we use this keyword to access the todos
  },
});
