# ReactReduxExample
I created this repo to understand Redux basics

# Notes for myself

- Install [Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)
- Create a [store](./redux/store.js)
- Create an [entity slice](./redux/todos.js) to register in the store
- Import the slice's CRUD functions (or whatever) to directly import in the files needed
- Import the entity slice to register in the store
- Bind the mapping the slice to a reducer
    - To access its features or initial states, use `useSelector` hook
- Use `useDispatch` hook to dispatch (execute) the functions of the entity slice