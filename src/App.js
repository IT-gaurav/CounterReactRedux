import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const counterReducer = (state = { count: 0 }, { type }) => {
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT_COUNT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const nameReducer = (state = { name: "" }, { type, payload }) => {
  switch (type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
  nameReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState);

const Counter = () => {
  const dispatch = useDispatch();
  const { name, count } = useSelector((state) => ({
    ...state.counterReducer,
    ...state.nameReducer,
  }));

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
      <div>
        <h4>Your Name is</h4>
        <h3>{name}</h3>
      </div>
    </>
  );
};

const Name = () => {
  const dispatch = useDispatch();
  const updateNameHandler = (e) => {
    dispatch({
      type: "UPDATE_NAME",
      payload: e.target.value,
    });
  };

  return (
    <>
      <input onChange={updateNameHandler} placeholder="Enter Your Name" />
    </>
  );
};

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
};
export default App;
