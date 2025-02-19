In ReactJS, 
useReducer is a Hook that provides an alternative to useState for managing state in functional components, 
especially when the state logic is more complex and involves multiple sub-values or when the next state depends on the previous one. 
Here's a breakdown of how useReducer works:

Reducer Function: 
You define a reducer function that specifies how the state updates in response to actions. 
This function takes the current state and an action as arguments and returns the new state based on the action type.

Dispatch Function: useReducer returns an array with two elements:
                   The first element is the current state value.
                   The second element is a dispatch function used to dispatch actions to the reducer.
Action: Actions are objects that typically have a type field that describes the type of action to perform. 
        Additional data related to the action can be included as well.


import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  // Initializing state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
