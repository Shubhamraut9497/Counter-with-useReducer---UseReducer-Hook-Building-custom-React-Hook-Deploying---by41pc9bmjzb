import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{/*initial state to be placed here*/})
  return (
    <div id="main">
         <span id="counter">{state}</span>
      <br />
      <button
        id="increment-btn"
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  )
}


export default App;
