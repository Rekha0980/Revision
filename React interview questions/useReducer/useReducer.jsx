import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_AMOUNT":
      return state + 1000;

    case "DECREMENT_AMOUNT":
      return state - 1000;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter:{state}</h1>

      <button onClick={() => dispatch({ type: "DECREMENT_AMOUNT" })}>
        SUB
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_AMOUNT" })}>
        ADD
      </button>
    </>
  );
}
export default Counter;