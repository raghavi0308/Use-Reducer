import React from 'react'
const initialState = { count: 0 }

function reducer (state, action){

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      return { count: state.count - 1 }

    case 'reset':
      return initialState

    default:
      return state
  }
}

const Reducer = () => {
    const[state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default Reducer