import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const reducer = (state, { type }) => {
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT_COUNT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const store = createStore(reducer, initialState);

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increment = () => {
    dispatch({
      type: "INCREMENT_COUNT",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DECREMENT_COUNT",
    });
  };
  return (
    <>
      <h2>Count:: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
