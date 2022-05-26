import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const randomId = () => Math.random().toString();
      //console.log(action);
      state.todos.push({id: randomId(), todo: action.payload.todo});
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload.todo.id,
      );
    },
  },
});

export const addTodo = todosSlice.actions.addTodo; // we directly import these functions from components to bind with `useDispath` function
export const removeTodo = todosSlice.actions.removeTodo;
export default todosSlice.reducer; // we export slice to register in store.js
